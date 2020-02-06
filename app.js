const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require("./lib/employee");

function employeePrompt() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Intern, manager, or emgineer?",
                name: "title",
                // choices: ["Employee", "Intern", "Manager", "Engineer"]
            },
            {
                type: "input",
                message: "Name:",
                name: "name"
            },
            {
                type: "input",
                message: "Email address:",
                name: "email"
            },
            {
                type: "number",
                message: "ID:",
                name: "id"
            }
        ]).then(response => {
        
            const userResponse = response;
            employee = new Employee(userResponse.name, userResponse.title, userResponse.email, userResponse.id)
        })
    }