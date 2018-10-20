var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'student',
  password : 'student',
  database : 'test'
});

var selectAll = function(callback) {
  connection.query('SELECT * FROM tasks', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var updateStatus = function(status, id, callback){
  let sqlThing = 'UPDATE Tasks SET status = '+ status +' WHERE id = '+ id;
  connection.query(sqlThing, function(err, results, fields){
    if(err){
      console.error('Error in update status');
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}

// var knex = require('knex')({
//   client: 'mysql',
//   connection: {
//     host: '127.0.0.1',
//     user: 'student',
//     password: 'student',
//     database: 'test'
//   },
//   pool: { min: 0, max: 7 }
// })



module.exports.selectAll = selectAll;
module.exports.updateStatus = updateStatus;
