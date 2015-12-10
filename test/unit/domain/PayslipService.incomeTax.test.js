"use strict";

var assert = require("assert");
var omps = require('./PayslipServiceObjectMother');


describe('PayslipService.incomeTax tests', function () {
    var validPayslipServiceInTaxFreeRange = omps.validPayslipServiceInTaxFreeRange();
    var validPayslipServiceInTaxRange = omps.validPayslipServiceInTaxRange();
    var validPayslipServiceInLastTaxRange = omps.validPayslipServiceInLastTaxRange();

    it('should not pay any taxes if employee annual salary is in tax-free range', function () {
        assert.equal(validPayslipServiceInTaxFreeRange.incomeTax(), 0);
    });

    it('should return appropriate income tax value if annual salary is contained in a given tax range', function () {
        assert.equal(validPayslipServiceInTaxRange.incomeTax(), 39747);
    });

    it('should return appropriate income tax value if annual salary is contained in last range (then unbounded' +
        ' range)', function () {
        assert.equal(validPayslipServiceInLastTaxRange.incomeTax(), 198547);
    });
});