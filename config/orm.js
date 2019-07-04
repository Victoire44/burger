var connection = require("/connection.js");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
var orm = {
    all: function(){

    },

    create: function(){

    },

    update: function(){

    }

}

module.exports = orm; 