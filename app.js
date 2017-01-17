/*Shows IP address, language, and browser/operating system information https://requestheaderparsernodejs.herokuapp.com/ */
var express = require('express')
var app = express()
var router = express.Router();

app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
 
  //res.send(req.headers['user-agent']);
  var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
  var language=req.headers["accept-language"];
  var os=req.headers['user-agent'];
  var browserInfoObj = { "IP Address": ip, "Language": language, "Operating System": os };
  res.send(browserInfoObj);
})

app.listen(app.get('port'), function () {
  console.log('Example app listening on port 5000!')
})
