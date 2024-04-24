Use sql_invoicing;
Select * from clients;
select * from invoices;
select * from payment_methods;
select * from payments;

Explain Select c.name as Client_Name,c.city as Client_City,p.name as Payment_Method, p1.amount as Amount, p1.invoice_id as Invoice_ID
From payment_methods p 
join payments p1
On p.payment_method_id=p1.payment_method
join clients c 
on c.client_id=p1.client_id
where p1.invoice_id=2;
