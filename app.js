"use strict";

var express = require('express');
var app = express();
var path = require('path');
var EmployeeDetails = require('./domain/EmployeeDetails').EmployeeDetails;
var PayslipService = require('./domain/PayslipService').PayslipService;

/* http server configuration */
app.set('view engine', 'ejs');
app.use(require('body-parser').json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', (process.env.PORT || 5000));


/* routes */
app.get('/', function (req, res) {
    res.render('index');
});

app.get('/payslip', function (req, res) {
    var firstName = req.query.firstName;
    var lastName = req.query.lastName;
    var annualSalary = req.query.annualSalary;
    var superRate = parseFloat(req.query.superRate);
    var startDate = new Date(req.query.startDate);

    try{
        var ed = new EmployeeDetails(firstName, lastName, annualSalary, superRate, startDate);
        var ps = new PayslipService(ed);
        res.send(ps.generate());
    } catch (e){
        res.send(e.message);
    }
});

/* start server */
app.listen(app.get('port'), function () {
    console.log("taxtest app started! Open a browser at http://localhost:5000");
});