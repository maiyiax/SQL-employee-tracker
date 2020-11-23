/* Department Seeds */

INSERT INTO department (name)
VALUES ('Human Resource');

INSERT INTO department (name)
VALUES ('Sales');

INSERT INTO department (name)
VALUES ('Customer Service');

INSERT INTO department (name)
VALUES ('IT');


/* Employee Role Seeds */

INSERT INTO role (title, salary, department_id)
VALUES ('HR Assistant', 37000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ('HR Rep', 40000, 1)

INSERT INTO role (title, salary, department_id)
VALUES ('HR Manager', 70000, 1)

INSERT INTO role (title, salary, department_id)
VALUES ('Sales Rep', 60000, 2)

INSERT INTO role (title, salary, department_id)
VALUES ('Account Executive', 68000, 2)

INSERT INTO role (title, salary, department_id)
VALUES ('Sales Manager', 85000, 2)

INSERT INTO role (title, salary, department_id)
VALUES ('Customer Service Rep', 32000, 3)

INSERT INTO role (title, salary, department_id)
VALUES ('Support Specialist', 35000, 3)

INSERT INTO role (title, salary, department_id)
VALUES ('Customer Service Manager', 50000, 3)

INSERT INTO role (title, salary, department_id)
VALUES ('Software Developer', 65000, 4)

INSERT INTO role (title, salary, department_id)
VALUES ('Systems Analyst', 58000, 4)

INSERT INTO role (title, salary, department_id)
VALUES ('Software Engineer', 100000, 4)

/* Employee Seeds */

INSERT INTO employee (first_name, last_name, role_id)
VALUES ('Anna', 'Baker', 1);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ('Joe', 'Phalon', 2);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ('Henry', 'Davis', 3);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ('Haley', "Tayare", 4);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ('Mike', 'Chan', 5);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ('Ellis', 'Greene', 6);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ('Priya', 'Kapoor', 7);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ('Mimi', 'Khang', 8);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ('Nelson', 'Blanc', 9);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ('Roger', 'Jones', 10)
