var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mysql = require('mysql');

//start server

app.listen(port);
console.log('Server started, at http://localhost'+ port);


var connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '13748abc',
   database: 'characters'
});

connection.connect(function(err) {
   if (err) {
       console.error('error connecting: ' + err.stack);
       return;
   }
   console.log('connected as id ' + connection.threadId);
});

app.get('/cast', function(req, res) {
 connection.query('SELECT * FROM seinfeld', function(err, result) {
  if(err){ console.log(err);}
  else{
    var html = '<h1> Characters <h1>'
    for(var i = 0; i < result.length; i++)
    {
      html += '<div style="background-color:blue; color:red; margin-left:30px;">';
      html += '<ul>';
      html += '<li> ' + result[i].id + '</li>';
      html += '<li> ' + result[i].name + '</li>';
      html += '</ul>';
      html += '<br />';
      html += '</div>';
    }
    res.send(html);
  }
 });
});