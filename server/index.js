var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var tasks = require('../database-mysql');
// var items = require('../database-mongo');

var app = express();

//UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/api/tasks', function (req, res) {
  tasks.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.patch('/api/status', function (req, res) {
  //takes a task id and a new status
  console.log('PATCH to /api/status');
  console.log(req.body);
  tasks.updateStatus(req.body.status, req.body.id)
  res.send('PATCH HOMIE');

});


app.listen(3000, function() {
  console.log('listening on port 3000!');
});

