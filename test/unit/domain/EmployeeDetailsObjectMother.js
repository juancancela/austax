"use strict";

var ed = require('../../../domain/EmployeeDetails');
var EmployeeDetails = ed.EmployeeDetails;

const validFirstName = "John";
const validLastName = "Doe";
const validAnnualSalary = 120000;
const validAnnualSalaryWithRemainerBelow50 = 121000;
const validAnnualSalaryWithRemainerAbove50 = 152000;
const validAnnualSalaryInTaxFreeRange = 2000;
const validAnnualSalaryInTaxRange = 140000;
const validAnnualSalaryInLastTaxRange = 500000;
const validSuperRate = 0.4;
const validStartDate = new Date('12/12/14');


const invalidName = "j";
const invalidAnnualSalary = -1;
const invalidSuperRate = 0.9;
const invalidStartDate = "22/22/22";


/**
 * @returns {EmployeeDetails} a valid EmployeeDetails object
 */
function validEmployeeDetails() {
    return new EmployeeDetails(validFirstName, validLastName, validAnnualSalary, validSuperRate, validStartDate);
}

function validEmployeeDetailsWithRemainderBelow50MonthlySalary() {
    return new EmployeeDetails(validFirstName, validLastName, validAnnualSalaryWithRemainerBelow50, validSuperRate, validStartDate);
}

function validEmployeeDetailsWithRemainderAboveOrEquals50MonthlySalary() {
    return new EmployeeDetails(validFirstName, validLastName, validAnnualSalaryWithRemainerAbove50, validSuperRate, validStartDate);
}

function validEmployeeDetailsWithAnnualSalaryInTaxFreeRange(){
    return new EmployeeDetails(validFirstName, validLastName, validAnnualSalaryInTaxFreeRange, validSuperRate, validStartDate);
}

function validEmployeeDetailsWithAnnualSalaryInTaxRange(){
    return new EmployeeDetails(validFirstName, validLastName, validAnnualSalaryInTaxRange, validSuperRate, validStartDate);
}

function validEmployeeDetailsWithAnnualSalaryInLastTaxRange(){
    return new EmployeeDetails(validFirstName, validLastName, validAnnualSalaryInLastTaxRange, validSuperRate, validStartDate);
}

function invalidFirstNameEmployeeDetails() {
    return new EmployeeDetails(invalidName, validLastName, validAnnualSalary, validSuperRate, validStartDate);
}

function invalidLastNameEmployeeDetails() {
    return new EmployeeDetails(validFirstName, invalidName, validAnnualSalary, validSuperRate, validStartDate);
}

function invalidAnnualSalaryEmployeeDetails() {
    return new EmployeeDetails(validFirstName, validLastName, invalidAnnualSalary, validSuperRate, validStartDate);
}

function invalidSuperRateEmployeeDetails(){
    return new EmployeeDetails(validFirstName, validLastName, validAnnualSalary, invalidSuperRate, validStartDate);
}

function invalidStartDateEmployeeDetails(){
    return new EmployeeDetails(validFirstName, validLastName, validAnnualSalary, validSuperRate, invalidStartDate);
}



module.exports = {
    validFirstName                                                : validFirstName,
    validLastName                                                 : validLastName,
    validAnnualSalary                                             : validAnnualSalary,
    validSuperRate                                                : validSuperRate,
    validStartDate                                                : validStartDate,
    validAnnualSalaryWithRemainerBelow50                          : validAnnualSalaryWithRemainerBelow50,
    validAnnualSalaryWithRemainerAbove50                          : validAnnualSalaryWithRemainerAbove50,
    validEmployeeDetails                                          : validEmployeeDetails,
    invalidFirstNameEmployeeDetails                               : invalidFirstNameEmployeeDetails,
    invalidLastNameEmployeeDetails                                : invalidLastNameEmployeeDetails,
    invalidAnnualSalaryEmployeeDetails                            : invalidAnnualSalaryEmployeeDetails,
    invalidSuperRateEmployeeDetails                               : invalidSuperRateEmployeeDetails,
    invalidStartDateEmployeeDetails                               : invalidStartDateEmployeeDetails,
    validEmployeeDetailsWithRemainderBelow50MonthlySalary         : validEmployeeDetailsWithRemainderBelow50MonthlySalary,
    validEmployeeDetailsWithRemainderAboveOrEquals50MonthlySalary : validEmployeeDetailsWithRemainderAboveOrEquals50MonthlySalary,
    validEmployeeDetailsWithAnnualSalaryInTaxFreeRange            : validEmployeeDetailsWithAnnualSalaryInTaxFreeRange,
    validEmployeeDetailsWithAnnualSalaryInTaxRange                : validEmployeeDetailsWithAnnualSalaryInTaxRange,
    validEmployeeDetailsWithAnnualSalaryInLastTaxRange            : validEmployeeDetailsWithAnnualSalaryInLastTaxRange
};

