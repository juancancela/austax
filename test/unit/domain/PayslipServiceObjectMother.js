"use strict";

var TAX_RATES_TEST_FILE_PATH = '../test/unit/tax_rates.test.json';
var PayslipService = require('../../../domain/PayslipService').PayslipService;
var om = require('./EmployeeDetailsObjectMother');

function validPayslipService() {
    return new PayslipService(om.validEmployeeDetails(), TAX_RATES_TEST_FILE_PATH);
}

function validPayslipServiceMonthlyRemainderBelow50(){
    return new PayslipService(om.validEmployeeDetailsWithRemainderBelow50MonthlySalary(), TAX_RATES_TEST_FILE_PATH);
}

function validPayslipServiceMonthlyRemainderAboveOrEquals50(){
    return new PayslipService(om.validEmployeeDetailsWithRemainderAboveOrEquals50MonthlySalary(), TAX_RATES_TEST_FILE_PATH);
}

function validPayslipServiceInTaxFreeRange(){
    return new PayslipService(om.validEmployeeDetailsWithAnnualSalaryInTaxFreeRange(), TAX_RATES_TEST_FILE_PATH);
}

function validPayslipServiceInTaxRange(){
    return new PayslipService(om.validEmployeeDetailsWithAnnualSalaryInTaxRange(), TAX_RATES_TEST_FILE_PATH);
}

function validPayslipServiceInLastTaxRange(){
    return new PayslipService(om.validEmployeeDetailsWithAnnualSalaryInLastTaxRange(), TAX_RATES_TEST_FILE_PATH);
}


module.exports = {
    validPayslipService                                : validPayslipService,
    validPayslipServiceMonthlyRemainderBelow50         : validPayslipServiceMonthlyRemainderBelow50,
    validPayslipServiceMonthlyRemainderAboveOrEquals50 : validPayslipServiceMonthlyRemainderAboveOrEquals50,
    validPayslipServiceInTaxFreeRange                  : validPayslipServiceInTaxFreeRange,
    validPayslipServiceInTaxRange                      : validPayslipServiceInTaxRange,
    validPayslipServiceInLastTaxRange                  : validPayslipServiceInLastTaxRange
};

