const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");


function initialPrompt() {
    // console.log("managerPrompt");
    return inquirer.prompt([
        {
            type: "list",
            name: "newMember",
            message: "What do you want to do?",
            choices: ["Post an item", "Bid on an item"],
        }
    ])
}

function engineerPrompt() {
    // console.log("engineerPrompt");
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter engineer's name:",
        },
        {
            type: "input",
            name: "email",
            message: "Please enter engineer's email:",
        },
        {
            type: "input",
            name: "github",
            message: "Please enter engineer's Github username:",
        },
        {
            type: "confirm",
            name: "anotherOne",
            message: "Do you want to add another team member?",
            default: true
        },
        {
            type: "list",
            name: "newMember",
            message: "Which type of team member do you want to add?",
            choices: ["Engineer", "Intern"],
            when: function(answers) {
                return answers.anotherOne;
            }
        }
    ]);
}

function internPrompt() {
    // console.log("internPrompt");
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter intern's name:",
        },
        {
            type: "input",
            name: "email",
            message: "Please enter intern's email:",
        },
        {
            type: "input",
            name: "school",
            message: "Please enter intern's university",
        },
        {
            type: "confirm",
            name: "anotherOne",
            message: "Do you want to add another team member?",
            default: true
        },
        {
            type: "list",
            name: "newMember",
            message: "Which type of team member do you want to add?",
            choices: ["Engineer", "Intern"],
            when: function(answers) {
                return answers.anotherOne;
            }
        }
    ]);
}



async function init() {
    // console.log("init() called");
    try {
        initialPrompt();
        
    } catch (err) {
        console.log(err);
    }
}

init();