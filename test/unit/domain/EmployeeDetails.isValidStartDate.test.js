"use strict";

var assert = require("assert");
var ed = require('../../../domain/EmployeeDetails');


describe('EmployeeDetails.isValidStartDate function tests', function () {

    it('should be invalid to use a start date that is not of date type ', function () {
        assert.equal(ed.isValidStartDate("12/12/12"), false);
    });

    it('should be invalid to use a future date as a start date ', function () {
        /* lets add one day to current date */
        var futureDate = new Date();
        futureDate.setTime(futureDate.getTime() + 86400000);

        assert.equal(ed.isValidStartDate(new Date()), false);
    });

    it('should be valid to use a start date that is of type date and its prior to current time ', function () {
        assert.equal(ed.isValidStartDate(new Date('12/12/12')), true);
    });
});