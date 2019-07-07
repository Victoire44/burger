var orm = require("../config/orm");


var burger = {
    // Get all the burgers
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res)
        });
    },

    // Create a new burger
    create: function (burgerObj, cb) {
        orm.create("burgers", burgerObj, function (res) {
            cb(res)
        });
    },
    
    // Update a burger
    update: function (id, burgerObj, cb) {
        orm.update("burgers", burgerObj, "id = " + id , function (res) {
            cb(res);
        });
    }
};

module.exports = burger