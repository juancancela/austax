"use strict";

var assert = require("assert");
var ed = require('../../../domain/EmployeeDetails');

describe('EmployeeDetails.isValidAnnualSalary function tests', function () {

    it('should be valid to use annual salaries that are positive integers', function () {
        assert.equal(ed.isValidAnnualSalary(12500), true);
        assert.equal(ed.isValidAnnualSalary(-1), false);
    });
});