"use strict";

var assert = require("assert");
var ed = require('../../../domain/EmployeeDetails');


describe('EmployeeDetails.isValidSuperRate function tests', function () {

    it('should be invalid to use super rate values below ' + ed.MIN_SUPER_RATE + ' %', function () {
        assert.equal(ed.isValidSuperRate(ed.MIN_SUPER_RATE - 0.1), false);
    });

    it('should be invalid to use super rate values above ' + ed.MAX_SUPER_RATE + ' %', function () {
        assert.equal(ed.isValidSuperRate(ed.MAX_SUPER_RATE + 0.1), false);
    });

    it('should be valid to use super rate values between ' + ed.MIN_SUPER_RATE + ' % and ' + ed.MAX_SUPER_RATE + ' %', function () {
        assert.equal(ed.isValidSuperRate(ed.MIN_SUPER_RATE), true);
        assert.equal(ed.isValidSuperRate(ed.MAX_SUPER_RATE), true);
    });
});