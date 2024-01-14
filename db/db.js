//var mysql = require("mysql");
var mysql2 = require('mysql2/promise');

var pool  = mysql2.createPool({
  connectionLimit : 10,
  host            : 'aws.connect.psdb.cloud',
  user            : 'y8sja6rykpmxv5ju8qbv',
  password        : 'pscale_pw_Qrk6FfaTdDrCsNFNvDh3ftG6N4y2Jnqc37kHHJQ00BV',
  database        : 'cs_631_project',
  ssl : {
      rejectUnauthorized: true
  }
  
});

module.exports = pool;