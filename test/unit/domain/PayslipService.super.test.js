"use strict";

var assert = require("assert");
var omps = require('./PayslipServiceObjectMother');

describe('PayslipService.super tests', function () {
    var validPayslipServiceInTaxRange = omps.validPayslipServiceInTaxRange();

    it('should correctly calculate super as gross income - income tax', function () {
        assert.equal(validPayslipServiceInTaxRange.super(), 4667);
    });
});