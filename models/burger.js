var orm = require('../config/orm.js');

var burger =
{
    selectAll: function (callback) {
        orm.selectAll(function (res) {
            callback(res);
        });
    },

}

// Export at the end of the burger.js file.
module.exports = burger;