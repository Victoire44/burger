var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burgers_db"
});

var herokuConnection = mysql.createConnection({
  host: "axxb6a0z2kydkco3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "spiny4r0hvb5gitw",
  password: "l523ynpfscxc8ig3",
  database: "l0gw50zi7cjxa3gk"
});

herokuConnection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + herokuConnection.threadId);
});

module.exports = herokuConnection;