"use strict";

var assert = require("assert");
var omps = require('./PayslipServiceObjectMother');


describe('PayslipService.netIncome tests', function () {
    var validPayslipServiceInTaxFreeRange = omps.validPayslipServiceInTaxFreeRange();
    var validPayslipServiceInTaxRange = omps.validPayslipServiceInTaxRange();
    var validPayslipServiceInLastTaxRange = omps.validPayslipServiceInLastTaxRange();

    it('should not pay any taxes if employee annual salary is in tax-free range', function () {
        assert.equal(validPayslipServiceInTaxFreeRange.netIncome(), 167);
    });

    it('should return appropriate income tax value if annual salary is contained in a given tax range', function () {
        assert.equal(validPayslipServiceInTaxRange.netIncome(), 8355);
    });

    it('should return appropriate income tax value if annual salary is contained in last range (then unbounded' +
        ' range)', function () {
        assert.equal(validPayslipServiceInLastTaxRange.netIncome(), 25121);
    });
});