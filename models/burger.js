var orm = require("../config/orm");


var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res)
        });
    },
    create: function (burgerName, cb) {
        orm.create("burgers", burgerName, function (res) {
            cb(res)
        });
    },

    update: function (id, cb) {
        orm.update("burgers", id, function (res) {
            cb(res);
        });
    }
};



module.exports = burger