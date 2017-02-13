var express = require('express');

var app = express();

var port = process.env.PORT || 5000;

app.use(express.static('public'));

// basic html setting:
// app.use(express.static('src/views'));
// app.get('/', function(req, res){
//     res.send('Hello World');
// });

// Template engine Jade setting:
// app.set('views', './src/views');
// app.set('view engine', 'jade');
// app.get('/', function(req, res){
//     res.render('index');
// });

// Template engine Handlebars setting:
// app.set('views', './src/views');
// var handlebars = require('express-handlebars');
// app.engine('.hbs', handlebars({extname: '.hbs'}));
// app.set('view engine', '.hbs');
// app.get('/', function(req, res){
//     res.render('index');
// });

app.set('views', './src/views');
app.set('view engine', '.ejs');
app.get('/', function (req, res) {
    res.render('index', {
        title: 'Hello from render',
        nav: [{
            Link: '/Books',
            Text: 'Books'
        }, {
            Link: '/Authors',
            Text: 'Authors'
        }]
    });
});


app.get('/books', function(req, res){
    res.send('Hello Books');
});

app.listen(port, function(err){
  console.log('running server on port ' + port);
});
