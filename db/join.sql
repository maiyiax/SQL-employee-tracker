/* Join Manager ID's to Employee */

/* WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to */
SELECT employee.first_name, employee.last_name, employee.role_id, roles.title, roles.department_id, department.name
FROM employee
INNER JOIN roles ON employee.role_id = roles.id
INNER JOIN department ON department.id = roles.department_id;
