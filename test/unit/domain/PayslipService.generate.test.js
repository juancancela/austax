"use strict";

var assert = require("assert");
var omps = require('./PayslipServiceObjectMother');

describe('PayslipService.generate tests', function () {
    var validPayslipServiceInTaxRange = omps.validPayslipServiceInTaxRange();

    it('should return full name in payslip generated response', function () {
        assert.equal(validPayslipServiceInTaxRange.generate().name, validPayslipServiceInTaxRange.employeeDetails.fullName());
    });

    it('should return pay period in payslip generated response', function () {
        assert.equal(validPayslipServiceInTaxRange.generate().payPeriod, validPayslipServiceInTaxRange.payPeriod());
    });

    it('should return net income in payslip generated response', function () {
        assert.equal(validPayslipServiceInTaxRange.generate().netIncome, validPayslipServiceInTaxRange.netIncome());
    });

    it('should return super in payslip generated response', function () {
        assert.equal(validPayslipServiceInTaxRange.generate().super, validPayslipServiceInTaxRange.super());
    });

    it('should return net income in payslip generated response', function () {
        assert.equal(validPayslipServiceInTaxRange.generate().incomeTax, validPayslipServiceInTaxRange.incomeTax());
    });

});