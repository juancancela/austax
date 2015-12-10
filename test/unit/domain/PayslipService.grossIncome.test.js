"use strict";

var assert = require("assert");
var omed = require('./EmployeeDetailsObjectMother');
var omps = require('./PayslipServiceObjectMother');


describe('PayslipService tests', function () {
    var validPayslipService = omps.validPayslipService();
    var validPayslipServiceMonthlyRemainderBelow50 = omps.validPayslipServiceMonthlyRemainderBelow50();
    var validPayslipServiceMonthlyRemainderAboveOrEquals50 = omps.validPayslipServiceMonthlyRemainderAboveOrEquals50();

    it('should correctly generate gross income for an employee for zero remainder case', function () {
        assert.equal(validPayslipService.grossIncome(), Math.round(omed.validAnnualSalary / 12));
    });

    it('should correctly round gross income value down if remainder < 50', function () {
        assert.equal(validPayslipServiceMonthlyRemainderBelow50.grossIncome(), Math.round(omed.validAnnualSalaryWithRemainerBelow50 / 12));
    });

    it('should correctly round gross income value up if remainder >= 50', function () {
        assert.equal(validPayslipServiceMonthlyRemainderAboveOrEquals50.grossIncome(), Math.round(omed.validAnnualSalaryWithRemainerAbove50 / 12));
    });

});