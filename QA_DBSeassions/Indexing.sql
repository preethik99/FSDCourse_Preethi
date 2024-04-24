
CREATE DATABASE `Emp_Data`;
use `Emp_Data`;
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    Name VARCHAR(100),
    DepartmentID INT,
    Salary DECIMAL(10, 2)
);


INSERT INTO Employees (EmployeeID, Name, DepartmentID, Salary) VALUES
(1, 'John Doe', 101, 50000.00),
(2, 'Jane Smith', 102, 60000.00),
(3, 'Michael Johnson', 101, 55000.00),
(4, 'Emily Williams', 103, 70000.00),
(5, 'Christopher Brown', 102, 52000.00),
(6, 'Amanda Jones', 101, 61000.00),
(7, 'David Martinez', 103, 56000.00),
(8, 'Jessica Garcia', 102, 72000.00),
(9, 'Daniel Rodriguez', 101, 53000.00),
(10, 'Sarah Lopez', 103, 62000.00),
(11, 'Ryan Hernandez', 101, 57000.00),
(12, 'Jennifer Martinez', 102, 73000.00),
(13, 'Matthew Gonzalez', 103, 54000.00),
(14, 'Emily Perez', 101, 63000.00),
(15, 'David Robinson', 102, 58000.00);

CREATE TABLE Departments (
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(100)
);

INSERT INTO Departments (DepartmentID, DepartmentName) VALUES
(101, 'Engineering'),
(102, 'Marketing'),
(103, 'Finance');

Select * from Employees;
select * from Departments;

CREATE INDEX idx_department_id ON Employees(DepartmentID);

Explain Select * from Employees where DepartmentID=101;

Drop Index idx_department_id on employees;



 




