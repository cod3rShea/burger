const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");
const connection = require("../config/connection.js");

// redirect root to index
router.get("/", function(req, res) {
  res.redirect('/index');
});


router.get("/index", function(req, res) {
  console.log("index");
  burger.selectAll((data) => {
    console.log(data);
    handlebarsObject = {
      burger: data
    };
    res.render("index", handlebarsObject);
  });
  

});


router.post("/index", function(req, res){
  var burgerName = req.body.burgerName;
  var today = new Date();
  connection.query('INSERT INTO burgers SET ?', {burger_name: burgerName, date: today}, function (error, results) {
    if (error) throw error;
    console.table(results);
  });
   
  // res.send(location.reload())
})

module.exports = router;



