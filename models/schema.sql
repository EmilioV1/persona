DROP DATABASE IF EXISTS personadb;
CREATE DATABASE personadb;

USE personadb;

CREATE TABLE persona(
  name VARCHAR(45) NULL,
  intelligence INTEGER(60) NULL,
  speed INTEGER(45) NULL,
  power INTEGER(45) NULL,
  placeofbirth VARCHAR(45) NULL,
  publisher VARCHAR(45) NULL,
  gender VARCHAR(45) NULL,
  race VARCHAR(45) NULL,
  image BLOB(45) NULL,
);

SELECT * FROM personadb;

