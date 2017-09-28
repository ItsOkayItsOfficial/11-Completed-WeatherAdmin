/*
* Author: Alex P
* Project Name: 11-Completed Weather Admin Work
* Version: 1
* Date:  09/27/17
* URL:
*/

// Variables - Require
var weather = require("weather-js")
var fs = require("fs");
var request = require("request");

// Variables - Global
var input = process.argv;
var calc = parseFloat;
var op = input[2];
var mod = input[3];

// Run - logData()
// turn on logData
logData('', true);
logData('Command: ' + op + ' ' + mod, true);

// Function - Log input
function logData(log, print) {
    // File - logoData logs...data
    fs.appendFileSync('log.txt', log + '\r\n');
    // If - on/off for logData
    if (!print) {
        console.log(log);
      } else {
        console.log(p);
      }
    };