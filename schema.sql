DROP DATABASE IF EXISTS test;

CREATE DATABASE test;

USE test;

CREATE TABLE Tasks (
  ID INTEGER NOT NULL AUTO_INCREMENT,
  taskName varchar(255) NOT NULL,
  points INTEGER,
  description varchar(255) NOT NULL,
  status varchar(255) NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO Tasks (taskName, points, description, status) VALUES ( "RETRIBUTION", 25, "Slay 30 rival ninja for your Daimyo.", "Pending"); 
INSERT INTO Tasks (taskName, points, description, status) VALUES ( "NEVER SMILE", 10, "You smiled once in 2006. There's no going back.", "Failed"); 
INSERT INTO Tasks (taskName, points, description, status) VALUES ( "IMMORTAL BONES", 10, "Purchase milk from H-E-B.", "Complete");
INSERT INTO Tasks (taskName, points, description, status) VALUES ( "KEYBOARD DEMO TUNE", 999, "A task to demonstrate features for great honor.", "Pending");


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
