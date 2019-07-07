var connection = require("../config/connection");

// Add quotes to the strings
function escape(value) {
    return typeof value === "string" ? `'${value}'` : value
}

// function to retrieve keys and values in SQL format for the SET
function objToSql(obj) {
    var result = []
    var keys = Object.keys(obj)
    var values = Object.values(obj)
    for (var i = 0; i < keys.length; i++) {
        result.push(`${keys[i]} = ${escape(values[i])}`);
    }
    return result; 
    // Object.keys(obj).map(key => `${key} = ${escape(obj[key])}`)
}

// Object relational mapping
var orm = {
    // return all the data
    all: function (tableInput, cb) {
        var queryString = `SELECT * FROM ${tableInput};`

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },

    // Insert new row in the table
    create: function (table, obj, cb) {
        var queryString = `
        INSERT INTO ${table} (${Object.keys(obj).toString()}) 
        VALUES (${Object.values(obj).map(escape).toString()});
        `
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // Update an existing row in the table
    update: function (table, obj, condition, cb) {
        var queryString = `
          UPDATE ${table}
          SET ${objToSql(obj)}
          WHERE ${condition};
        `
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm; 