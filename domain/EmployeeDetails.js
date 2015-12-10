"use strict";

/* Min number of character allowed in a name */
const MIN_CHARS_IN_NAME = 2;

/* Max number of chars allowed in a name */
const MAX_CHARS_IN_NAME = 15;

/* Min allowed annual salary */
const MIN_ANNUAL_SALARY = 1;

/* Min allowed super rate */
const MIN_SUPER_RATE = 0.00;

/* Max allowed super rate */
const MAX_SUPER_RATE = 0.50;

/* Message to be displayed in case name is invalid */
const INVALID_NAME_MSG = "Invalid name. Must be a string between " + MIN_CHARS_IN_NAME + " and " + MAX_CHARS_IN_NAME + " characters";

/* Message to be displayed in annual salary is invalid */
const INVALID_ANNUAL_SALARY_MSG = "Invalid annual salary. Must be a positive integer";

/* Message to be displayed in case annual salary is invalid */
const INVALID_SUPER_RATE_MSG = "Invalid super rate. Must be a value between " + MIN_SUPER_RATE + " and " + MAX_SUPER_RATE;

/* Message to be displayed in case start date is invalid */
const INVALID_START_DATE_MSG = "Invalid start date. Must be of type Date and a date prior to current time";


/**
 * Employee details class
 */
class EmployeeDetails {

    /**
     * EmployeeDetails constructor
     * @param firstName the first name of the employee
     * @param lastName the last name of the employee
     * @param annualSalary the annual salary of the employee
     * @param superRate the super rate value that corresponds to the employee
     * @param startDate the start date required to calculate the payslip
     */
    constructor(firstName, lastName, annualSalary, superRate, startDate) {
        if (isValidName(firstName)) {
            this._firstName = firstName;
        } else {
            throw new Error(INVALID_NAME_MSG);
        }

        if (isValidName(lastName)) {
            this._lastName = lastName;
        } else {
            throw new Error(INVALID_NAME_MSG);
        }

        if (isValidAnnualSalary(annualSalary)) {
            this._annualSalary = annualSalary;
        } else {
            throw new Error(INVALID_ANNUAL_SALARY_MSG);
        }

        if (isValidSuperRate(superRate)) {
            this._superRate = superRate;
        } else {
            throw new Error(INVALID_SUPER_RATE_MSG);
        }

        if (isValidStartDate(startDate)) {
            this._startDate = startDate;
        } else {
            throw new Error(INVALID_START_DATE_MSG)
        }
    }

    fullName(){
        return this.firstName + " " + this.lastName;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get annualSalary() {
        return this._annualSalary;
    }

    get superRate() {
        return this._superRate;
    }

    get startDate() {
        return this._startDate;
    }
}

/**
 * @param firstName the parameter to be validated
 * @returns {*|boolean} true if name is valid, otherwise false
 */
function isValidName(firstName) {
    return firstName.length >= MIN_CHARS_IN_NAME && firstName.length <= MAX_CHARS_IN_NAME;
}

/**
 * @param annualSalary annual salary value to be validated
 * @returns {*|boolean} true if name is valid, otherwise false
 */
function isValidAnnualSalary(annualSalary) {
    return annualSalary >= MIN_ANNUAL_SALARY;
}

/**
 * @param superRate super rate percentage to be valited
 * @returns {*|boolean} true if name is valid, otherwise false
 */
function isValidSuperRate(superRate) {
    return superRate >= MIN_SUPER_RATE && superRate <= MAX_SUPER_RATE;
}

/**
 * @param startDate start date to be validated
 * @returns {*|boolean} true if name is valid, otherwise false
 */
function isValidStartDate(startDate) {
    var now = new Date();
    return startDate && startDate instanceof Date && startDate < now;
}


module.exports = {
    EmployeeDetails           : EmployeeDetails,
    isValidName               : isValidName,
    isValidAnnualSalary       : isValidAnnualSalary,
    isValidSuperRate          : isValidSuperRate,
    isValidStartDate          : isValidStartDate,
    MIN_CHARS_IN_NAME         : MIN_CHARS_IN_NAME,
    MAX_CHARS_IN_NAME         : MAX_CHARS_IN_NAME,
    MIN_SUPER_RATE            : MIN_SUPER_RATE,
    MAX_SUPER_RATE            : MAX_SUPER_RATE,
    INVALID_NAME_MSG          : INVALID_NAME_MSG,
    INVALID_ANNUAL_SALARY_MSG : INVALID_ANNUAL_SALARY_MSG,
    INVALID_SUPER_RATE_MSG    : INVALID_SUPER_RATE_MSG,
    INVALID_START_DATE_MSG    : INVALID_START_DATE_MSG
};