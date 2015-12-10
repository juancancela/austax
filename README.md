# Taxtest

## System Requirements
* NodeJS 4.2.3 LTS
* Tested under Mac OSX 10.11.1 (El Capitan) and Fedora 23

## Installing NodeJS

### Windows and Mac users
* Go to https://nodejs.org/en/download then download and install appropriate version (both in Windows and Mac is a one file installer).

### Linux Users
* Download sources from https://nodejs.org/en/download and run following command to install it:
```sh
$ ./configure && make && make install
```

### Test NodeJS was correctly installed

* Test that NodeJS was correctly installed in your system executing following
  command (it must print v4.2.3):
```sh
$ node -v
```  

## Installing application


* On application root path, run following command to download application dependencies
```sh
$ npm install
```

## Starting application

* On application root path, run following command to start application
```sh
$ npm start
```

Once application is started, it can be tested from UI, navigating to http://localhost:5000 
or using cURL, running following command:

```sh
$ curl http://localhost:5000/payslip?firstName=FIRST_NAME&lastName=LAST_NAME&annualSalary=ANNUAL_SALARY&superRate
=SUPER_RATE&startDate=START_DATE
```


## Executing application unit tests

* On application root path, run following command to run tests
```sh
$ npm test
```

## Checking application code coverage

* On application root path, run following command to generate code coverage site
```sh
$ npm run coverage
```
