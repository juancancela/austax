"use strict";

var assert = require("assert");
var om = require('./EmployeeDetailsObjectMother');
var ed = require('../../../domain/EmployeeDetails');


describe('EmployeeDetails tests', function () {

    it('should correctly create an EmployeeDetails object with the valid values', function () {
        var o = om.validEmployeeDetails();

        assert.equal(om.validFirstName, o.firstName);
        assert.equal(om.validLastName, o.lastName);
        assert.equal(om.validAnnualSalary, o.annualSalary);
        assert.equal(om.validSuperRate, o.superRate);
        assert.equal(om.validStartDate, o.startDate);
    });

    it('should correctly create EmployeeDetails full name', function () {
        var o = om.validEmployeeDetails();

        assert.equal(om.validFirstName + " " + om.validLastName, o.fullName());
    });

    it('should throw an error with descriptive information if first or last name are not valid', function(){
        try{
            om.invalidFirstNameEmployeeDetails();
        } catch(e){
            assert.equal(ed.INVALID_NAME_MSG, e.message);
        }
        try{
            om.invalidLastNameEmployeeDetails();
        } catch(e){
            assert.equal(ed.INVALID_NAME_MSG, e.message);
        }
    });

    it('should throw an error with descriptive information if annual salary is not valid', function(){
        try{
            om.invalidAnnualSalaryEmployeeDetails();
        } catch(e){
            assert.equal(ed.INVALID_ANNUAL_SALARY_MSG, e.message);
        }
    });

    it('should throw an error with descriptive information if super rate is not valid', function(){
        try{
            om.invalidSuperRateEmployeeDetails();
        } catch(e){
            assert.equal(ed.INVALID_SUPER_RATE_MSG, e.message);
        }
    });

    it('should throw an error with descriptive information if start date is not valid', function(){
        try{
            om.invalidStartDateEmployeeDetails();
        } catch(e){
            assert.equal(ed.INVALID_START_DATE_MSG, e.message);
        }
    });

});