CREATE DATABASE `OlaCabs`;
use OlaCabs;

CREATE Table `user`(
`UserID` tinyint(4) NOT NULL AUTO_INCREMENT,
`Name` varchar(50),
`Email` varchar(50),
`Phone Number` int(100),
`Password` varchar(50),
`PaymentMethod` varchar(50),
 PRIMARY KEY (`UserID`)
);
INSERT INTO `user` (`Name`, `Email`, `Phone Number`, `Password`, `PaymentMethod`)
VALUES
('John Doe', 'john.doe@example.com', '1234567890', 'password123', 'Credit Card'),
('Alice Smith', 'alice.smith@example.com', '9876543210', 'qwerty456', 'Debit Card'),
('Bob Johnson', 'bob.johnson@example.com', '4567891230', 'pass123', 'UPI'),
('Emma Watson', 'emma.watson@example.com', '7891234560', 'password321', 'Cash'),
('Michael Jordan', 'michael.jordan@example.com', '3216549870', 'mike123', 'Ola Money');

ALTER TABLE `Driver`
MODIFY COLUMN `Phone Number` VARCHAR(20);

ALTER TABLE `user`
CHANGE COLUMN `Phone Number` `Phone_Number` VARCHAR(20);

Select * from user;

CREATE Table `Driver`(
`DriverID` tinyint(4) NOT NULL AUTO_INCREMENT,
`Name` varchar(50),
`Email` varchar(50),
`Phone Number` int(100),
`License Number` varchar(50),
`Car Model` varchar(50),
`Car Registration Number`  varchar(50),
 PRIMARY KEY (`DriverID`)
);

Select * from Driver;

INSERT INTO `Driver` (`Name`, `Email`, `Phone Number`, `License Number`, `Car Model`,`Car Registration Number`)
VALUES
('Chris Evans', 'chris.evans@example.com', '8765432109', 'DL654321', 'Chevrolet Cruze', 'XYZ789'),
('Scarlett Johansson', 'scarlett.johansson@example.com', '7654321098', 'DL987654', 'Tesla Model S', 'PQR456'),
('Emma Johnson', 'emma.johnson@example.com', '9876543210', 'DL123456', 'Toyota Corolla', 'DEF456'),
('James Brown', 'james.brown@example.com', '8765432109', 'DL654321', 'Honda Civic', 'MNO789'),
('Sophia Miller', 'sophia.miller@example.com', '7654321098', 'DL987654', 'Ford Mustang', 'GHI123');



