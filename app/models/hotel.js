var pg = require('pg');

// var connectionString = "postgres://postgres:123@localhost:5432/photos";

var config = {
  user: 'postgres', //env var: PGUSER
  database: 'photos', //env var: PGDATABASE
  password: 'tqhba29041995', //env var: PGPASSWORD
  host: 'localhost', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

var pool = new pg.Pool(config);

var Hotel = {
  getHotel: function(key, callback) {
    pool.query("select tenks from khachsan where tenks like '%' || $1 || '%'", [key], function(err, result) {
      callback(err, result.rows);
    });
  },

  getInfoHotel: function(keyword, callback) {
    pool.query("select tenks, tentp, sosao, mota, url_image from khachsan, cover_hotel where (tenks like '%' || $1 || '%' or tentp like '%' || $1 || '%') and (khachsan.id=cover_hotel.khachsan)", [keyword], function(err, result){
      callback(err, result.rows);
    });
  }
};

module.exports = Hotel;
