var router = require('express').Router();
var pg = require('pg');

var config = {
  database: 'rho'
};

var pool = new pg.Pool(config);

router.get('/', function(req, res) {
  pool.connect(function (err, client, done) {
    try {
      if (err) {
        console.log('Error connnecting to the DB', err);
        res.sendStatus(500);
        return;
      }

      client.query('SELECT * FROM favorite_gifs;', function(err, result) {
        if (err) {
          console.log('Error querying the DB', err);
          res.sendStatus(500);
          return;
        }
        res.send(result.rows);
      });
    } finally {
      done();
    }
  });
});

module.exports = router;
