DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
	id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2)NOT NULL,
	stock_quantity INT NOT NULL, 
    PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Go Pro', 'Electronics', 400.00, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Mittens', 'Apparel', 21.95, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Nespresso', 'Kitchen', 395.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('iPhone', 'Electronics', 999.00, 600);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Broom', 'Cleaning', 20.00, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Space Heater', 'Home', 30.00, 400);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Towel Warmer', 'Home', 150.00, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Minecraft', 'Video Games', 20.00, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Sled', 'Outdoors', 25.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Nerf Gun', 'Games', 20.00, 100);
 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Snow Boots', 'Shoes', 50.00, 100);
 



SELECT * FROM products;
