var pg = require('pg');

// var connectionString = "postgres://postgres:123@localhost:5432/photos";

var config = {
  user: 'postgres', //env var: PGUSER
  database: 'photos', //env var: PGDATABASE
  password: '123', //env var: PGPASSWORD
  host: 'localhost', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

var pool = new pg.Pool(config);

var Image = {
  // getAll: function(callback) {
  //   // var client = new pg.Client(connectionString);
  //   // pool.connect(function(err, client, done) {
  //   //   if (err) throw err;
  //
  //   // setTimeout(function() {
  //   pool.query('select url, name from photo', function(err, result) {
  //     // done(err);
  //     callback(err, result.rows);
  //   });
  //   // }, 5000);
  //   // });
  // },

  getAll: function(callback) {
    // var client = new pg.Client(connectionString);
    // pool.connect(function(err, client, done) {
    //   if (err) throw err;

    // setTimeout(function() {
    return pool.query('select url, name from photo', function(err, result) {
      // done(err);
      callback(err, result.rows);
    });
    // }, 5000);
    // });
  },

  search: function(keyword, callback){
    pool.query("select tenks from khachsan where tentp like '%' || $1 || '%'",[keyword], function(err, result) {
      // done(err);
      callback(err, result.rows);
    });
  }
};

module.exports = Image;
