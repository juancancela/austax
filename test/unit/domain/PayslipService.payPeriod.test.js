"use strict";

var assert = require("assert");
var omps = require('./PayslipServiceObjectMother');

describe('PayslipService.payPeriod tests', function () {
    var validPayslipService = omps.validPayslipService();

    it('should set pay period to 12 if given date is in December', function () {
        assert.equal(validPayslipService.payPeriod(), 12);
    });

});