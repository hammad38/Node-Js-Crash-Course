const express = require("express");
const mysql = require("mysql");

//create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodemysql",
});

//connect to mysql
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL connected");
});

const app = express();

//create Database
app.get("/createdb", (req, res) => {
  const sql = "CREATE DATABASE nodemysql";
  db.query(sql, (err) => {
    if (err) {
      throw err;
    }
    res.send("Database Created");
  });
});

//create Table
app.get("/createemployee", (req, res) => {
  const sql =
    "CREATE TABLE employee(id int AUTO_INCREMENT, name VARCHAR(255), designation VARCHAR(255), PRIMARY KEY(id) )";
  db.query(sql, (err) => {
    if (err) {
      throw err;
    }
    res.send("Table Created");
  });
});

//insert employee
app.get("/employee1", (req, res) => {
  let post = { name: "Jake Smith", designation: "CEO" };
  let sql = "INSERT INTO employee SET?";
  db.query(sql, post, (err) => {
    if (err) {
      throw err;
    }
    res.send("Employee Added");
  });
});

//select employee
app.get("/employee", (req, res) => {
  let sql = "SELECT * FROM employee";
  db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    console.log(results);
    res.send("Employee data fetched");
  });
});

// update employee
app.get("/updateemployee/:id", (req, res) => {
  let newName = "Hammad";
  let sql = "UPDATE employee SET name = ? WHERE id = ?";
  db.query(sql, [newName, req.params.id], (err) => {
    if (err) {
      throw err;
    }
    res.send("Employee Updated");
  });
});

//delete employee
app.get("/deleteemployee/:id", (req, res) => {
  let sql = `DELETE FROM employee WHERE id = ${req.params.id}`;
  db.query(sql, (err) => {
    if (err) {
      throw err;
    }
    res.send("Employee Deleted");
  });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
