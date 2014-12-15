# This script will be run after the initial table creation

# Schools

INSERT INTO SCHOOLS (NAME, SHORTNAME, CITY, COUNTRY, WEBSITE) VALUES ("University of British Columbia", "UBC", "Vancouver", "Canada", "www.ubc.ca");
INSERT INTO SCHOOLS (NAME, SHORTNAME, CITY, COUNTRY, WEBSITE) VALUES ("Simon Fraser University", "SFU", "Vancouver", "Canada", "www.sfu.ca");

# Departments

INSERT INTO DEPARTMENTS (NAME, SHORTNAME, SCHOOLNAME) VALUES ("Math", "MATH", "University of British Columbia");
INSERT INTO DEPARTMENTS (NAME, SHORTNAME, SCHOOLNAME) VALUES ("Computer Science", "CPSC", "University of British Columbia");
INSERT INTO DEPARTMENTS (NAME, SHORTNAME, SCHOOLNAME) VALUES ("Biology", "BIOL", "University of British Columbia");
INSERT INTO DEPARTMENTS (NAME, SHORTNAME, SCHOOLNAME) VALUES ("Chemistry", "CHEM", "University of British Columbia");
INSERT INTO DEPARTMENTS (NAME, SHORTNAME, SCHOOLNAME) VALUES ("English", "ENGL", "University of British Columbia");

# Courses

INSERT INTO COURSES (NAME, SHORTNAME, DEPARTMENTID) VALUES ("CPSC 110", "CPSC 110", 2);
INSERT INTO COURSES (NAME, SHORTNAME, DEPARTMENTID) VALUES ("CPSC 121", "CPSC 121", 2);
INSERT INTO COURSES (NAME, SHORTNAME, DEPARTMENTID) VALUES ("CPSC 210", "CPSC 210", 2);
INSERT INTO COURSES (NAME, SHORTNAME, DEPARTMENTID) VALUES ("BIOL 101", "BIOL 101", 3);
INSERT INTO COURSES (NAME, SHORTNAME, DEPARTMENTID) VALUES ("BIOL 102", "BIOL 102", 3);
INSERT INTO COURSES (NAME, SHORTNAME, DEPARTMENTID) VALUES ("ENGL 110", "ENGL 110", 5);
INSERT INTO COURSES (NAME, SHORTNAME, DEPARTMENTID) VALUES ("ENGL 121", "ENGL 121", 5);

# Units

INSERT INTO UNITS (COURSEID, CONTENT) VALUES (1, "Introduction");
INSERT INTO UNITS (COURSEID, CONTENT) VALUES (1, "Theory");
INSERT INTO UNITS (COURSEID, CONTENT) VALUES (1, "Loops");
INSERT INTO UNITS (COURSEID, CONTENT) VALUES (1, "Recursion");

# Posts

# Users