Use sql_hr;
Select *  from employees;

SELECT e1.first_name, e2.first_name as manager
FROM employees e1
JOIN employees e2
ON e1.reports_to=e2.employee_id;

Use sql_store;
SELECT * from customers;
SELECT * FROM orders;
SELECT * FROM order_items;
SELECT * FROM products;
SELECT * from orders;

SELECT c.first_name as Customer_Name, p.name as Product_Name
FROM customers c
JOIN orders o
ON c.customer_id=o.customer_id
JOIN order_items o1
ON o.order_id=o1.order_id
JOIN products p
ON o1.product_id=p.product_id;

Use OlaCabs;

USE sql_store;

Select * from products;

SELECT SUM(quantity_in_stock)
FROM products;

Select * from orders;
SELECT status,COUNT(order_id)
FROM orders
GROUP BY status;

use sql_invoicing;

Select * from invoices;

SELECT client_id,SUM(invoice_total)
FROM invoices
GROUP BY client_id
Having count(invoice_id)>=2;

SELECT client_id, SUM(invoice_total)
FROM invoices
Where payment_date is not null
Group by client_id
Having count(invoice_id)>2;

select * from order_items;

SELECT customer_id, count(order_id)
FROM orders
GROUP BY customer_id;

Select o.customer_id,count(1) 
