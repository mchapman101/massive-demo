var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var db = massive.connectSync({db : "massive_demo"});

var app = express();
app.use(bodyParser.json());

var port = 3000;

db.get_all_injuries(function(err, injuries){
  console.log(injuries);
});

app.get('/incidents', function(req, res) {
  db.get_all_incidences(function(err, incidents){
  res.send(incidents);
  })
});

app.post('/incidents', function(req, res) {
  var incident = [
    req.body.us_state,
     req.body.injury_id,
     req.body.cause_id
      ];
    db.create_incident(incident, function(err, resp){
        res.send(resp)

});
});

app.listen(port, function() {
  console.log("Started server on port", port);
});
