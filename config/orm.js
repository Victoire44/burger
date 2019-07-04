var connection = require("/connection.js");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        value = "'" + value + "'";
        arr.push(key + "=" + value);
      }
    }
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

var orm = {
    all: function (tableInput, cb) {
        var queryString = `SELECT * FROM ${tableInput};`

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },

    create: function (table, cols, vals, cb) {
        var queryString = ```
        INSERT INTO ${table} (${cols.toString()}) 
        VALUES (${printQuestionMarks(vals.length)})
        ```
        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    update: function (table, objColVals, condition, cb) {
        var queryString = ```
          UPDATE ${table}
          SET ${objToSql(objColVals)}
          WHERE ${condition}
        ```
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

module.exports = orm; 