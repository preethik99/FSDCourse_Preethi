CREATE DATABASE ola_cabs;
USE ola_cabs;
CREATE TABLE User (
    UserID INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    phone_number VARCHAR(10),
    password VARCHAR(100),
    paymentMethod VARCHAR(50)
);
INSERT INTO User (UserID, name, email, phone_number, password, paymentMethod)
VALUES
(1, 'Alice', 'alice@example.com', '2233445566', 'password123', 'Credit Card'),
(2, 'Bob', 'bob@example.com', '3344556677', 'password456', 'PayPal'),
(3, 'Charlie', 'charlie@example.com', '4455667788', 'password789', 'Cash');

CREATE TABLE Driver (
    DriverID INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    phone_number VARCHAR(10),
    license_number VARCHAR(50),
    car_model VARCHAR(50),
    car_registration_number VARCHAR(50)
);
INSERT INTO Driver (DriverID, name, email, phone_number, license_number, car_model, car_registration_number)
VALUES
(1, 'John Doe', 'john.doe@example.com', '1234567890', 'LIC12345', 'Toyota Camry', 'REG12345'),
(2, 'Jane Smith', 'jane.smith@example.com', '0987654321', 'LIC54321', 'Honda Accord', 'REG54321'),
(3, 'Mike Johnson', 'mike.johnson@example.com', '1122334455', 'LIC67890', 'Ford Fusion', 'REG67890');

CREATE TABLE Ride_Categories (
    RideCategories_id INT PRIMARY KEY,
    name VARCHAR(50),
    description VARCHAR(255)
);

INSERT INTO Ride_Categories (RideCategories_id, name, description)
VALUES
(1, 'Economy', 'Affordable rides'),
(2, 'Premium', 'Luxury rides'),
(3, 'Pool', 'Shared rides');

CREATE TABLE Ride (
    RideID INT PRIMARY KEY,
    UserID INT,
    DriverID INT,
    startlocation VARCHAR(255),
    endlocation VARCHAR(255),
    starttime DATETIME,
    endtime DATETIME,
    fare VARCHAR(50),
    ridestatus VARCHAR(50),
    rideCategories_ID INT,
    car_type_id INT,
    FOREIGN KEY (UserID) REFERENCES User(UserID),
    FOREIGN KEY (DriverID) REFERENCES Driver(DriverID),
    FOREIGN KEY (rideCategories_ID) REFERENCES Ride_Categories(RideCategories_id)
);

INSERT INTO Ride (RideID, UserID, DriverID, startlocation, endlocation, starttime, endtime, fare, ridestatus, rideCategories_ID, car_type_id)
VALUES
(1, 1, 1, 'Location A', 'Location B', '2023-06-01 10:00:00', '2023-06-01 10:30:00', '$15', 'Completed', 1, 1),
(2, 2, 2, 'Location C', 'Location D', '2023-06-01 11:00:00', '2023-06-01 11:45:00', '$20', 'Completed', 2, 2),
(3, 3, 3, 'Location E', 'Location F', '2023-06-01 12:00:00', '2023-06-01 12:30:00', '$10', 'Cancelled', 3, 3);




