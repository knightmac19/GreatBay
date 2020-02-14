const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");


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

    return inquirer.prompt([
        {
            type: "input",
            name: ""
        }
    ])
}


async function init() {
    // console.log("init() called");
    try {
        var initialRes = initialPrompt();

        if(initialRes === "Post an item") {
            // function
        } else {
            // function
        }
        
    } catch (err) {
        console.log(err);
    }
}

init();