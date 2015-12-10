"use strict";

var assert = require("assert");
var ed = require('../../../domain/EmployeeDetails');


describe('EmployeeDetails.isValidName function tests', function () {

    it('should be invalid to use names greater than ' + ed.MAX_CHARS_IN_NAME + ' characters', function () {
        var greaterThanValidName = Math.random().toString(36).substr(0, ed.MAX_CHARS_IN_NAME + 1);

        assert.equal(false, ed.isValidName(greaterThanValidName));
    });

    it('should be invalid to use names lesser than ' + ed.MIN_CHARS_IN_NAME + ' characters', function () {
        var lowerThanValidName = Math.random().toString(36).substr(0, ed.MIN_CHARS_IN_NAME - 1);

        assert.equal(ed.isValidName(lowerThanValidName), false);
    });

    it('should be valid to use names between ' + ed.MIN_CHARS_IN_NAME + ' and ' + ed.MAX_CHARS_IN_NAME + ' characters', function () {
        var validNameMax = Math.random().toString(36).substr(0, ed.MAX_CHARS_IN_NAME);
        var validNameMin = Math.random().toString(36).substr(0, ed.MIN_CHARS_IN_NAME);

        assert.equal(ed.isValidName(validNameMax), true);
        assert.equal(ed.isValidName(validNameMin), true);
    });
});
