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

INSERT INTO roles (title, salary, department_id)
VALUES ('HR Assistant', 37000, 1);

INSERT INTO roles (title, salary, department_id)
VALUES ('HR Rep', 40000, 1);

INSERT INTO roles (title, salary, department_id)
VALUES ('HR Manager', 70000, 1);

INSERT INTO roles (title, salary, department_id)
VALUES ('Sales Rep', 60000, 2);

INSERT INTO roles (title, salary, department_id)
VALUES ('Account Executive', 68000, 2);

INSERT INTO roles (title, salary, department_id)
VALUES ('Sales Manager', 85000, 2);

INSERT INTO roles (title, salary, department_id)
VALUES ('Customer Service Rep', 32000, 3);

INSERT INTO roles (title, salary, department_id)
VALUES ('Support Specialist', 35000, 3);

INSERT INTO roles (title, salary, department_id)
VALUES ('Customer Service Manager', 50000, 3);

INSERT INTO roles (title, salary, department_id)
VALUES ('Software Developer', 65000, 4);

INSERT INTO roles (title, salary, department_id)
VALUES ('Software Engineer', 100000, 4);

INSERT INTO roles (title, salary, department_id)
VALUES ('IT Manager', 150000, 4);

/* Employee Seeds */

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Anna', 'Baker', 1, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Joe', 'Phalon', 2, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Henry', 'Davis', 3, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Haley', "Tayare", 4, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Mike', 'Chan', 5, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Ellis', 'Greene', 6, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Priya', 'Kapoor', 7, 9);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Mimi', 'Khang', 8, 9);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Nelson', 'Blanc', 9, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Roger', 'Jones', 10, 12);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Mary', 'Blake', 11, 12);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Aria', 'Peri', 12, NULL);
