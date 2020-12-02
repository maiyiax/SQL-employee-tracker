//  Import Dependencies
require('dotenv').config();
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
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
                    'Update an Employee Role',
                    'Exit'
                ]
            }
        )
        .then(response => {
            // use switch statement
            switch (response.main) {
                case 'View all Departments':
                    // return function to view departments
                    viewDepartment();
                    break;

                case 'View all Roles':
                    // return function to view roles
                    viewAllRoles();
                    break;

                case 'View all Employees':
                    // return function to view employees
                    viewAllEmployees();
                    break;

                case 'Add a Department':
                    // return function to add Department
                    addDepartment();
                    break;

                case 'Add a Role':
                    // return function to add role
                    addRole();
                    break;

                case 'Add an Employee':
                    // return function to add employee
                    addEmployee();
                    break;

                case 'Update an Employee Role':
                    // return function to update role
                    updateEmployee();
                    break;

                case 'Exit':
                    console.log(`
                    ====================
                    Exiting Application
                    ====================`)
                    connection.end();
            }
        });
};

// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing all employees by department names and department ids
const viewDepartment = () => {
    console.log(`
====================
Viewing by Deparment
====================\n`);

    connection.query(`SELECT department.name AS department, roles.department_id, CONCAT(employee.first_name, " ", employee.last_name) AS employee
                    FROM employee
                    LEFT JOIN roles ON employee.role_id = roles.id
                    LEFT JOIN department ON department.id = roles.department_id
                    ORDER BY department.name;`, function (err, res) {
        if (err) throw err;
        console.table(res);
        presentOptions();
    });
};

// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
const viewAllRoles = () => {
    console.log(`
================
Viewing by Roles
================\n`);

    connection.query(`SELECT roles.title, roles.id, department.name AS department, roles.salary, CONCAT(employee.first_name, " ", employee.last_name) AS employee
                     FROM roles
                     LEFT JOIN department ON department.id = roles.department_id
                     RIGHT JOIN employee ON roles.id = employee.role_id
                     ORDER BY roles.title;`, function (err, res) {
        if (err) throw err;
        console.table(res);
        presentOptions();
    });
}

// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
const viewAllEmployees = () => {
    console.log(`
=====================
Viewing all employees
=====================\n`)

    connection.query(`SELECT CONCAT(employee.first_name, " ", employee.last_name) AS employee, employee.id, roles.title, department.name AS department, roles.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager 
                    FROM employee
                    LEFT JOIN employee manager ON manager.id = employee.manager_id
                    LEFT JOIN roles ON roles.id = employee.role_id
                    LEFT JOIN department ON department.id = roles.department_id
                    ORDER BY employee;`, function (err, res) {
        if (err) throw err;
        console.table(res);
        presentOptions();
    });
};

// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
const addDepartment = () => {

    inquirer.prompt(
        {
            name: 'department',
            type: 'input',
            message: 'What Department do you want to add?',
            validate: departmentInput => {
                if (departmentInput) {
                    return true;
                } else {
                    console.log('Please enter a department name!');
                    return false;
                }
            }
        }
    )
        .then(function (response) {
            console.log(`
===================
Adding a Department
===================\n
            `);
            connection.query('INSERT INTO department SET ?',
                {
                    name: response.department
                },
                function (err) {
                    if (err) throw err;
                    console.table(response);
                    connection.query('SELECT * FROM department', function (err, res) {
                        if (err) throw err;
                        console.table(res);
                        presentOptions();
                    });
                });
        });
};

// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
const addRole = () => {

    inquirer.prompt([
        {
            name: 'title',
            type: 'input',
            message: 'What role would you like to add?',
            validate: roleInput => {
                if (roleInput) {
                    return true;
                } else {
                    console.log('Please enter a role name!');
                    return false;
                }
            }
        },
        {
            name: 'salary',
            type: 'number',
            message: 'What is the salary for this role?',
            validate: salaryInput => {
                if (salaryInput) {
                    return true;
                } else {
                    console.log('Please provide the salary!');
                    return false;
                }
            }
        },
        {
            name: 'department_id',
            type: 'number',
            message: 'What department id does this role belong in?',
            validate: roleDepartmentInput => {
                if (roleDepartmentInput) {
                    return true;
                } else {
                    console.log('Please provide a department id!');
                    return false;
                }
            }
        }
    ])
        .then(function (response) {
            console.log(`
=============
Adding a Role
=============\n
        `)
            connection.query(`INSERT INTO roles SET ?`,
                {
                    title: response.title,
                    salary: response.salary,
                    department_id: response.department_id
                },
                function (err) {
                    if (err) throw err;
                    console.table(response);
                    connection.query('SELECT * FROM roles', function (err, res) {
                        if (err) throw err
                        console.table(res);
                        presentOptions();
                    });
                });
        });
};
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database
const rolesArr = [];
const roleOptions = () => {
    connection.query(`SELECT * FROM roles`, function (err, res) {
        if (err) throw err;
        for (let i = 0; i < res.length; i++) {
            rolesArr.push(res[i].title);
        }
    });
    return rolesArr;
};

const employeeArr = [];
const employeeOptions = () => {
    connection.query(`SELECT CONCAT(employee.first_name, ' ', employee.last_name) AS employee 
                      FROM employee
                      LEFT JOIN roles on roles.id = employee.role_id`, function (err, res) {
        if (err) throw err;
        for (let a = 0; a < res.length; a++) {
            employeeArr.push(res[a].employee);
        }
    });
    return employeeArr;
}

const addEmployee = () => {
    inquirer.prompt([
        {
            name: 'first_name',
            type: 'input',
            message: "What is the employee's first name?",
            validate: firstNameInput => {
                if (firstNameInput) {
                    return true;
                } else {
                    console.log('You must provide a first name!');
                    return false;
                }
            }
        },
        {
            name: 'last_name',
            type: 'input',
            message: "What is the employee's last name?",
            validate: lastNameInput => {
                if (lastNameInput) {
                    return true;
                } else {
                    console.log('You must provide a last name!');
                    return false;
                }
            }
        },
        {
            name: 'role',
            type: 'list',
            message: "What is this employee's role?",
            choices: roleOptions()
        },
        {
            name: 'manager',
            type: 'list',
            message: "Who is this employee's manager?",
            choices: employeeOptions()
        }
    ])
        .then((response) => {
            // convert role title and manager name to ID's
            let roleID = roleOptions().indexOf(response.role) + 1;

            let managerId = employeeOptions().indexOf(response.manager) + 1;

            // console.log(roleID);
            // console.log(managerId);

            connection.query(`INSERT INTO employee SET ?`,
                {
                    first_name: response.first_name,
                    last_name: response.last_name,
                    role_id: roleID,
                    manager_id: managerId
                },
                function (err) {
                    if (err) throw err;

                    console.log(`
                    ===============
                    Adding Employee
                    ===============\n`)
                    console.table(response)
                    presentOptions();
                });

        });

};

// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database
const updateEmployee = () => {

    inquirer.prompt([
        {
            name: 'employee',
            type: 'list',
            message: 'Who would you like to update?',
            choices: employeeOptions()
        },
        {
            name: 'newRole',
            type: 'list',
            message: "What is the employee's new role?",
            choices: roleOptions()
        }
    ])
    .then (response => {
        let roleID = roleOptions().indexOf(response.role) + 1;
        let name = (response.employee).split(' ');
        // console.log(name[0]);
        connection.query(`UPDATE employee SET ? WHERE?`,
        [{
            first_name: name[0],
            last_name: name[1]
        },
        {
            role_id: roleID
        }],
        function(err){
            if (err) throw err;
            console.log(`
======================
Role has been updated!
======================\n`)
            console.table(response);
            presentOptions();
        });
    });
};






