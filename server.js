//  Import Dependencies
require('dotenv').config();
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');


// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3001,
    user: 'root',
    password: process.env.MYSQL_PW,
    database: "tracking_db"
});

connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    presentOptions();
});


// GIVEN a command-line application that accepts user input
// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
const presentOptions = () => {
    inquirer
        .prompt(
            {
                type: 'list',
                name: 'main',
                message: 'What would you like to do?',
                choices: [
                    'View all Departments',
                    'View all Roles',
                    'View all Employees',
                    'Add a Department',
                    'Add a Role', 
                    'Add an Employee',
                    'Update an Employee Role'
                ]
            }
        )
        .then((response) => {
            // use switch statement
            switch(response) {
                case 'View all Departments':
                    // return function to view departments
                    viewDepartment();
                    break;

                case 'View all Roles':
                    // return function to view roles
                    break;

                case 'View all Employees':
                    // return function to view employees
                    break;

                case 'Add a Department':
                    // return function to add Department
                    break;

                case 'Add a Role':
                    // return function to add role
                    break;

                case 'Add an Employee':
                    // return function to add employee
                    break;

                case 'Update an Employee Role':
                    // return function to update role
                    break;
            }
        })
};

// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
const viewDepartment = () => {
    connection.query('SELECT * FROM department', function(err, res) {
        if (err) throw err;
        console.table(res);
    });
};
// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

