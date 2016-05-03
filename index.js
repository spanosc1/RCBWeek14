var express = require('express');
var app = express();

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var icecreams = [
  {name: 'vanilla', price: 10, awesomeness: 3},
  {name: 'chocolate', price: 4, awesomeness: 8},
  {name: 'banana', price: 1, awesomeness: 1},
  {name: 'greentea', price: 5, awesomeness: 7},
  {name: 'jawbreakers', price: 6, awesomeness: 2},
];

app.get('/:name', function(req,res) {
   for(var i = 0; i < icecreams.length; i++)
   {
   	if(req.params.name == icecreams[i].name)
   	{
   		res.render('index', icecreams[i]);
   	}
   }
   
});


var port = 3000;
app.listen(port);