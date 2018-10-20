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

INSERT INTO Tasks (taskName, points, description, status) VALUES ( "RETRIBUTION", 25, "Slay 30 rival ninja for our Daimyo", "Complete"); 

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
