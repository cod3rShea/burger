var connection = require("./connection.js");

var orm =
{

  selectAll: function (callback) {
    //mySQL Query
    connection.query('SELECT * FROM burgers', function (err, result) {
      if (err) throw err;
      callback(result);
    });
  },

  insertOne: function (tableInput, colToSearch, valOfCol) {
  },

  updateOne: function (tableInput, colToSearch, valOfCol) {
  },

};

module.exports = orm;