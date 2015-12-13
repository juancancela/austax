#! /usr/bin/env node

"use strict";

var EmployeeDetails = require('./domain/EmployeeDetails').EmployeeDetails;
var PayslipService = require('./domain/PayslipService').PayslipService;

if (!process.argv[2]
    || process.argv[2].toLowerCase() === "--help"
    || process.argv[2].toLowerCase() === "-help"
    || process.argv[2].toLowerCase() === "help") {

    console.log("======================================================");
    console.log("AUSTAX help");
    console.log("Usage:");
    console.log("$ austax [ANNUAL_SALARY] [SUPER_RATE] [START_DATE]");
    console.log("");
    console.log("Example: austax 100000 0.4 12/12/12");
    console.log("======================================================");

} else {
    var annualSalary = parseInt(process.argv[2]);
    var superRate = parseFloat(process.argv[3]);
    var startDate = new Date(process.argv[4]);

    try {
        var ed = new EmployeeDetails("test", "test", annualSalary, superRate, startDate);
        var ps = new PayslipService(ed).generate();

        console.log("======================================================");
        console.log("MONTH        : " + ps.payPeriod);
        console.log("GROSS INCOME : " + ps.grossIncome);
        console.log("INCOME TAX   : " + ps.incomeTax);
        console.log("SUPER        : " + ps.super);
        console.log("NET INCOME   : " + ps.netIncome);
        console.log("======================================================");

    } catch (e) {
        console.log("======================================================");
        console.log("ERROR: " + e.message);
        console.log("======================================================");
    }
}
