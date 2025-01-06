-- Create the ITTC database
CREATE DATABASE ITTC;
USE ITTC;

-- Create CourseDetails table
CREATE TABLE CourseDetails (
    CD_ID INT(4) AUTO_INCREMENT PRIMARY KEY,
    CourseName VARCHAR(250),
    CourseType VARCHAR(15),
    Duration VARCHAR(20),
    Medium VARCHAR(20),
    CourseLevel VARCHAR(20),
    Active INT(3),
    DateEntered DATE,
    User VARCHAR(25),
    CHECK (Active IN (0, 1))
);

-- Create CourseModule table
CREATE TABLE CourseModule (
    ModuleId INT(4) AUTO_INCREMENT PRIMARY KEY,
    ModuleName VARCHAR(100),
    ModuleCode VARCHAR(7) UNIQUE CHECK (ModuleCode REGEXP '^[A-Z]{3}[0-9]{4}$'),
    Active INT(3),
    CreatedBy VARCHAR(25),
    DateEntered TIMESTAMP,
    CHECK (Active IN (0, 1))
);

-- Create CourseModuleLink table
CREATE TABLE CourseModuleLink (
    CD_ID INT,
    ModuleId INT,
    PRIMARY KEY (CD_ID, ModuleId),
    FOREIGN KEY (CD_ID) REFERENCES CourseDetails(CD_ID),
    FOREIGN KEY (ModuleId) REFERENCES CourseModule(ModuleId)
);

-- Create StudentDetails table
CREATE TABLE StudentDetails (
    StudentId INT AUTO_INCREMENT PRIMARY KEY,
    CourseYear INT(4),
    CourseId INT(4),
    FullName VARCHAR(255),
    NameWithInitials VARCHAR(255),
    NIC VARCHAR(255),
    MISNumber VARCHAR(255),
    Mobile VARCHAR(10),
    Address VARCHAR(555),
    Gender VARCHAR(6),
    Deleted INT(1),
    Changed INT(1),
    User VARCHAR(25),
    DateEntered DATE,
    Dropout INT(1),
    FinalExamSitted INT(1),
    RepeatStudent INT(1),
    FOREIGN KEY (CourseId) REFERENCES CourseDetails(CD_ID),
    CHECK (Deleted IN (0, 1)),
    CHECK (Changed IN (0, 1)),
    CHECK (Dropout IN (0, 1)),
    CHECK (FinalExamSitted IN (0, 1)),
    CHECK (RepeatStudent IN (0, 1))
);

-- Create StudentExamResult table
CREATE TABLE StudentExamResult (
    StudentId INT(4),
    CourseYear INT(10),
    ModuleCode VARCHAR(255),
    Marks INT(10),
    DateEntered DATE,
    User VARCHAR(25),
    PRIMARY KEY (StudentId, CourseYear, ModuleCode),
    FOREIGN KEY (StudentId) REFERENCES StudentDetails(StudentId),
    FOREIGN KEY (ModuleCode) REFERENCES CourseModule(ModuleCode)
);

-- Inserting sample data into CourseDetails table
INSERT INTO CourseDetails (CourseName, CourseType, Duration, Medium, CourseLevel, Active, DateEntered, User)
VALUES 
    ('Software Engineering', 'Full-time', '4 Years', 'English', 'Bachelor', 1, CURDATE(), 'admin1');

-- Inserting sample data into CourseModule table
INSERT INTO CourseModule (ModuleName, ModuleCode, Active, CreatedBy, DateEntered)
VALUES
    ('Software Development', 'CS1001', 1, 'admin1', CURDATE()),
    ('Database Systems', 'DB2002', 1, 'admin2', CURDATE()),
    ('Software Engineering Principles', 'SE3003', 1, 'admin3', CURDATE()),
    ('Cyber Security', 'CY4004', 1, 'admin4', CURDATE());

-- Linking CourseModules to CourseDetails
INSERT INTO CourseModuleLink (CD_ID, ModuleId)
VALUES
    (1, 3),
    (2, 2),
    (3, 1);

-- Inserting sample data into StudentExamResult table
INSERT INTO StudentExamResult (StudentId, CourseYear, ModuleCode, Marks, DateEntered, User)
VALUES
    (101, 2023, 'CS1001', 85, '2025-01-06', 'admin1'),
    (102, 2023, 'DB2002', 90, '2025-01-06', 'admin2'),
    (103, 2023, 'SE3003', 78, '2025-01-06', 'admin3'),
    (104, 2023, 'CY4004', 88, '2025-01-06', 'admin4'),
    (5, 2025, 'CSI1001', 85, '2025-01-06', 'admin1'),
    (3, 2025, 'DBS2002', 90, '2025-01-06', 'admin2'),
    (2, 2025, 'SEP3003', 78, '2025-01-06', 'admin3'),
    (1, 2024, 'CYB4004', 88, '2025-01-06', 'admin4');

-- Show data (optional for verification)
SELECT * FROM CourseModule;
SELECT * FROM CourseDetails;
SELECT * FROM StudentExamResult;
