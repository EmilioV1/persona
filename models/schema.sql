DROP DATABASE IF EXISTS personadb;
CREATE DATABASE personadb;

USE personaDB;

CREATE TABLE persona(
  id INT NOT NULL AUTO_INCREMENT,
  characterName VARCHAR(45) NULL,
  powerstats VARCHAR(60) NULL,
  biography VARCHAR(45) NULL,
  appearance VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

SELECT * FROM persona;

