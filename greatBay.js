const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
var mysql = require("mysql");
var sqlPassword = require("../support/mySQLpass");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: sqlPassword,
    database: "great_bay"
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
    
  });

  function afterConnection() {
    connection.query("SELECT * FROM items", function(err, res) {
        if (err) throw err;

        console.log(res);
        connection.end();
    })
}
function initialPrompt() {
    // console.log("managerPrompt");
    return inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What do you want to do?",
            choices: ["Post an item", "Bid on an item"],
        }
    ])
}

function bidPrompt() {
    afterConnection();
    // return inquirer.prompt([
    //     {
    //         type: "input",
    //         name: ""
    //     }
    // ])
}


async function init() {
    // console.log("init() called");
    try {
        var initialRes = initialPrompt();

        if(initialRes === "Post an item") {
            console.log("post an item")
        } else {
            bidPrompt()
        }
        
    } catch (err) {
        console.log(err);
    }
}

init();