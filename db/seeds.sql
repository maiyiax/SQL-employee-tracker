/* Department Seeds */

INSERT INTO department (name)
VALUE ('Human Resource');

INSERT INTO department (name)
VALUE ('Sales');

INSERT INTO department (name)
VALUE ('Customer Service');

INSERT INTO department (name)
VALUE ('IT');


/* Employee Role Seeds */

INSERT INTO roles (title, salary)
VALUES ('HR Assistant', 37000);

INSERT INTO roles (title, salary)
VALUES ('HR Rep', 40000);

INSERT INTO roles (title, salary)
VALUES ('HR Manager', 70000);

INSERT INTO roles (title, salary)
VALUES ('Sales Rep', 60000);

INSERT INTO roles (title, salary)
VALUES ('Account Executive', 68000);

INSERT INTO roles (title, salary)
VALUES ('Sales Manager', 85000);

INSERT INTO roles (title, salary)
VALUES ('Customer Service Rep', 32000);

INSERT INTO roles (title, salary)
VALUES ('Support Specialist', 35000);

INSERT INTO roles (title, salary)
VALUES ('Customer Service Manager', 50000);

INSERT INTO roles (title, salary)
VALUES ('Software Developer', 65000);

INSERT INTO roles (title, salary)
VALUES ('Systems Analyst', 58000);

INSERT INTO roles (title, salary)
VALUES ('Software Engineer', 100000);

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
