"use strict";

/* Default path where tax rates file is placed */
const DEFAULT_TAX_RATES_PATH = '../tax_rates.json';

class PayslipService {
    constructor(employeeDetails, taxRatesPath) {
        this._taxRatesPath = taxRatesPath || DEFAULT_TAX_RATES_PATH;
        this._employeeDetails = employeeDetails;
    }

    /**
     * @returns {*} employee details
     */
    get employeeDetails() {
        return this._employeeDetails;
    }

    get taxRatesPath() {
        return this._taxRatesPath;
    }

    /**
     * Generates the payslip doc for a given employee detils
     * @returns {{name: *, payPeriod: number, grossIncome: number, incomeTax}}
     */
    generate() {
        return {
            name: this._employeeDetails.fullName(),
            payPeriod: this.payPeriod(),
            grossIncome: this.grossIncome(),
            incomeTax: this.incomeTax(),
            super: this.super(),
            netIncome: this.netIncome()
        }
    }

    /**
     * @returns {number} the month of the payslip
     */
    payPeriod() {
        return this.employeeDetails.startDate.getMonth() + 1;
    }

    /**
     * Calculates gross income of an employee
     * @returns {number} gross income
     */
    grossIncome() {
        return Math.round(this.employeeDetails.annualSalary / 12);
    }

    /**
     * Calculates income tax of a payslip of a given employee. The income tax is a value conformed for a fixed value
     * (that can be zero in tax free ranges) plus an additional tax that is the result of getting a percentage of a part
     * of the annual salary of an employee.
     * In example, if an employee has an annual salary of 120000 on 2014, we will have following values from tax rates
     * table:
     * "180000": {
     *  "limit": 80000,
     *  "fixed": 17547,
     *  "multiplier": 0.370
     * }
     *
     * since limit is 80000 and annual salary is 120000, affected salary is 40000. From that value, we extract 37.5% and
     * add it to final tax result.
     *
     * @returns {number} corresponding income tax for the given employee
     */
    incomeTax() {
        var ed = this.employeeDetails;
        var year = taxRateApplicationYear(this.employeeDetails.startDate);
        var taxRates = require(this.taxRatesPath)[year];
        if (!taxRates) throw new Error("Tax Rates File could not loaded");

        /**
         * Closure used to determine whether or not the processed range is the last one
         * @param range the range to be analysed
         * @returns {*|boolean} true if its the last range, otherwise false
         * @private
         */
        var _isLastAvailableRange = function (range) {
            const LAST_AVAILABLE_RATE_PREFIX = '+';
            return range && range.substr(0, 1) === LAST_AVAILABLE_RATE_PREFIX;
        };

        var ranges = Object.keys(taxRates);
        for (var i = 0; i < ranges.length; i++) {
            if (ed.annualSalary < parseInt(ranges[i]) || _isLastAvailableRange(ranges[i])) {
                var fixedTax = parseFloat(taxRates[ranges[i]].fixed);

                var taxMultiplier = parseFloat(taxRates[ranges[i]].multiplier);
                var affectedSalary = ed.annualSalary - parseInt(taxRates[ranges[i]].limit);
                var additionalTax = taxMultiplier * affectedSalary;

                return Math.round(fixedTax + additionalTax);
            }
        }
    }

    netIncome() {
        return Math.round(this.grossIncome() - (this.incomeTax() / 12));
    }

    super() {
        return Math.round(this.grossIncome() * this.employeeDetails.superRate);
    }

}

/**
 * Given an EmployeeDetails object, applies following logic:
 * If the startDate is prior to July, it will be returned previous year, since pay periods seem to be calculated
 * from July 1st up to June 30th of next year.
 * In example, if EmployeeDetails.startDate is 2/8/2015, the rate application year is 2015. On the other hand,
 * if startDate is 2/2/2015, then it has to be used rates from 2014 ( since 2014 period started on 1/6/2014 and
 * lasts up to June 3th 2015)
 *
 * @param startDate EmployeeDetails' start date
 * @returns {number} the corresponding rate year
 */
var taxRateApplicationYear = function (startDate) {
    var LIMIT_MONTH_TAX_PERIOD = 7;
    if (startDate.getMonth() + 1 < LIMIT_MONTH_TAX_PERIOD) {
        return startDate.getFullYear() - 1;
    } else {
        return startDate.getFullYear();
    }
};


module.exports = {
    PayslipService: PayslipService,
    taxRateApplicationYear: taxRateApplicationYear
};