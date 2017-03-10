var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    service = require('./service.js');
service1 = require('./addition.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
 
app.use(express.static('../public'));
service.attachService(app);
//service1.attachService(app);
app.listen(3335);
console.log("server at http://localhost:3335");
