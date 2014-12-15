# This script will be run after the initial table creation
# Note: In MYSQL, auto-incrementing keys start from 1

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

INSERT INTO UNITS (COURSEID, NAME) VALUES (1, "Introduction");
INSERT INTO UNITS (COURSEID, NAME) VALUES (1, "Theory");
INSERT INTO UNITS (COURSEID, NAME) VALUES (1, "Loops");
INSERT INTO UNITS (COURSEID, NAME) VALUES (1, "Recursion");

# Users

INSERT INTO USERS (EMAIL, NAME, PASSWORD) VALUES ("albert275@gmail.com", "Albert Kim", "password");

# Threads

INSERT INTO THREADS (USERID, UNITID, CONTENT) VALUES (1, 1, "Is everyone enjoying this course so far?");
INSERT INTO THREADS (USERID, UNITID, CONTENT) VALUES (1, 1, "I have no idea what is happening in this course :(");
INSERT INTO THREADS (USERID, UNITID, CONTENT) VALUES (1, 2, "What does this mean?");
INSERT INTO THREADS (USERID, UNITID, CONTENT) VALUES (1, 3, "How are for loops written in C and C++?");
INSERT INTO THREADS (USERID, UNITID, CONTENT) VALUES (1, 4, "I am having difficulty thinking recursively");


# Posts

INSERT INTO POSTS (USERID, THREADID, CONTENT) VALUES (1, 1, "I love this course so far, even though it's only been like 2 weeks");
INSERT INTO POSTS (USERID, THREADID, CONTENT) VALUES (1, 1, "Gregor has been a great prof so far");
INSERT INTO POSTS (USERID, THREADID, CONTENT) VALUES (1, 1, "Uhhh, I don't think so. He's too full of himself.");
INSERT INTO POSTS (USERID, THREADID, CONTENT) VALUES (1, 2, "I think I'm going to fail...");
INSERT INTO POSTS (USERID, THREADID, CONTENT) VALUES (1, 4, "They're written in pretty much the same way as in Java.");
INSERT INTO POSTS (USERID, THREADID, CONTENT) VALUES (1, 5, "How are you even supposed to traverse all the steps taken in a recursive function call?");
INSERT INTO POSTS (USERID, THREADID, CONTENT) VALUES (1, 5, "You aren't supposed to. Humans can't keep track of so many program branches. As our prof mentioned, you just have to get the base case/recursive step right, then trust the recursion. Trust the recursion. Trust the recursion. Trust the recursion...");