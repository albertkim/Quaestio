# NOTE: Use sails.js ORM's automatic table generation
# Using the following script causes issues with the populate() association method
# After table generation, populate the database using the populate_table.sql file

# ------------------------------------------
# Main school entities ---------------------
# ------------------------------------------

CREATE TABLE SCHOOLS(
	NAME VARCHAR(100) NOT NULL,
	SHORTNAME VARCHAR(10) NOT NULL,
	CITY VARCHAR(50),
	COUNTRY VARCHAR(50),
	WEBSITE VARCHAR(50),
	PRIMARY KEY (NAME)
);

INSERT INTO SCHOOLS (NAME, SHORTNAME, CITY, COUNTRY, WEBSITE) VALUES ("University of British Columbia", "UBC", "Vancouver", "Canada", "www.ubc.ca");
INSERT INTO SCHOOLS (NAME, SHORTNAME, CITY, COUNTRY, WEBSITE) VALUES ("Simon Fraser University", "SFU", "Vancouver", "Canada", "www.sfu.ca");

CREATE TABLE DEPARTMENTS(
	ID MEDIUMINT NOT NULL AUTO_INCREMENT,
	NAME VARCHAR(50) NOT NULL,
	SHORTNAME VARCHAR(10),
	SCHOOLNAME VARCHAR(100) NOT NULL,
	FOREIGN KEY (SCHOOLNAME) REFERENCES SCHOOLS(NAME),
	UNIQUE (NAME, SCHOOLNAME),
	PRIMARY KEY (ID)
);

INSERT INTO DEPARTMENTS (NAME, SHORTNAME, SCHOOLNAME) VALUES ("Math", "MATH", "University of British Columbia");
INSERT INTO DEPARTMENTS (NAME, SHORTNAME, SCHOOLNAME) VALUES ("Computer Science", "CPSC", "University of British Columbia");
INSERT INTO DEPARTMENTS (NAME, SHORTNAME, SCHOOLNAME) VALUES ("Biology", "BIOL", "University of British Columbia");
INSERT INTO DEPARTMENTS (NAME, SHORTNAME, SCHOOLNAME) VALUES ("Chemistry", "CHEM", "University of British Columbia");
INSERT INTO DEPARTMENTS (NAME, SHORTNAME, SCHOOLNAME) VALUES ("English", "ENGL", "University of British Columbia");

CREATE TABLE COURSES(
	ID MEDIUMINT NOT NULL AUTO_INCREMENT,
	NAME VARCHAR(50) NOT NULL,
	SHORTNAME VARCHAR(10) NOT NULL,
	DEPARTMENTID MEDIUMINT NOT NULL,
	FOREIGN KEY (DEPARTMENTID) REFERENCES DEPARTMENTS(ID),
	UNIQUE(NAME, DEPARTMENTID),
	PRIMARY KEY (ID)
);

INSERT INTO COURSES (NAME, SHORTNAME, DEPARTMENTID) VALUES ("CPSC 110", "CPSC 110", 2);
INSERT INTO COURSES (NAME, SHORTNAME, DEPARTMENTID) VALUES ("CPSC 121", "CPSC 121", 2);
INSERT INTO COURSES (NAME, SHORTNAME, DEPARTMENTID) VALUES ("CPSC 210", "CPSC 210", 2);
INSERT INTO COURSES (NAME, SHORTNAME, DEPARTMENTID) VALUES ("BIOL 101", "BIOL 101", 3);
INSERT INTO COURSES (NAME, SHORTNAME, DEPARTMENTID) VALUES ("BIOL 102", "BIOL 102", 3);
INSERT INTO COURSES (NAME, SHORTNAME, DEPARTMENTID) VALUES ("ENGL 110", "ENGL 110", 5);
INSERT INTO COURSES (NAME, SHORTNAME, DEPARTMENTID) VALUES ("ENGL 121", "ENGL 121", 5);

# ------------------------------------------
# User entities ----------------------------
# ------------------------------------------

CREATE TABLE USERS(
	ID MEDIUMINT NOT NULL AUTO_INCREMENT,
	EMAIL VARCHAR(50) NOT NULL,
	NAME VARCHAR(50),
	PASSWORD VARCHAR(50) NOT NULL,
	CREATEDAT DATETIME,
	UNIQUE(EMAIL),
	PRIMARY KEY (ID)
);

INSERT INTO USERS (EMAIL, NAME, PASSWORD) VALUES ("albert275@gmail.com", "Albert Kim", "password");

# ------------------------------------------
# User associations ------------------------
# ------------------------------------------

CREATE TABLE ADMIN_FOR_COURSE(
	USERID MEDIUMINT NOT NULL,
	COURSEID MEDIUMINT NOT NULL,
	STARTDATE DATETIME,
	ENDDATE DATETIME,
	FOREIGN KEY (USERID) REFERENCES USERS(ID),
	FOREIGN KEY (COURSEID) REFERENCES COURSES(ID),
	PRIMARY KEY (USERID, COURSEID)
);

CREATE TABLE USER_TOOK_COURSE(
	USERID MEDIUMINT NOT NULL,
	COURSEID MEDIUMINT NOT NULL,
	FOREIGN KEY (USERID) REFERENCES USERS(ID),
	FOREIGN KEY (COURSEID) REFERENCES COURSES(ID),
	PRIMARY KEY (USERID, COURSEID)
);

# ------------------------------------------
# Post entities ----------------------------
# ------------------------------------------

CREATE TABLE UNITS(
	ID MEDIUMINT NOT NULL AUTO_INCREMENT,
	COURSEID MEDIUMINT NOT NULL,
	NAME VARCHAR(50) NOT NULL,
	ISHIDDEN BOOLEAN DEFAULT FALSE,
	FOREIGN KEY (COURSEID) REFERENCES COURSES(ID),
	PRIMARY KEY (ID)
);

INSERT INTO UNITS (COURSEID, NAME) VALUES (1, "Introduction");
INSERT INTO UNITS (COURSEID, NAME) VALUES (1, "Theory");
INSERT INTO UNITS (COURSEID, NAME) VALUES (1, "Loops");
INSERT INTO UNITS (COURSEID, NAME) VALUES (1, "Recursion");

CREATE TABLE THREADS(
	ID MEDIUMINT NOT NULL AUTO_INCREMENT,
	USERID MEDIUMINT NOT NULL,
	UNITID MEDIUMINT NOT NULL,
	CONTENT VARCHAR(1000) NOT NULL,
	CREATEDAT DATETIME NOT NULL,
	ISDELETED BOOLEAN DEFAULT FALSE,
	ISASSIGNMENTSPECIFIC BOOLEAN DEFAULT FALSE,
	FOREIGN KEY (USERID) REFERENCES USERS(ID),
	FOREIGN KEY (UNITID) REFERENCES UNITS(ID),
	PRIMARY KEY (ID)
);

CREATE TABLE POSTS(
	ID MEDIUMINT NOT NULL AUTO_INCREMENT,
	USERID MEDIUMINT NOT NULL,
	THREADID MEDIUMINT NOT NULL,
	CONTENT VARCHAR(1000) NOT NULL,
	CREATEDAT DATETIME NOT NULL,
	ISDELETED BOOLEAN DEFAULT FALSE,
	FOREIGN KEY (USERID) REFERENCES USERS(ID),
	FOREIGN KEY (THREADID) REFERENCES THREADS(ID),
	PRIMARY KEY (ID)
);

# There are separate chats for every post made
CREATE TABLE CHATS(
	ID MEDIUMINT NOT NULL AUTO_INCREMENT,
	USERID MEDIUMINT NOT NULL,
	POSTID MEDIUMINT NOT NULL,
	CONTENT VARCHAR(300) NOT NULL,
	CREATEDAT DATETIME NOT NULL,
	FOREIGN KEY (USERID) REFERENCES USERS(ID),
	FOREIGN KEY (POSTID) REFERENCES POSTS(ID),
	PRIMARY KEY (ID)
)