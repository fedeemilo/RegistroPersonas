const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mysql = require('mysql');
var methodOverride = require('method-override');
const myConnection = require('express-myconnection');

const app = express();

// importing routes
const personRoutes = require('./routes/person');

// settings
const PORT = process.env.PORT || 4000;
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(
	myConnection(
		mysql,
		{
			host: 'us-cdbr-east-05.cleardb.net',
			user: 'b89274a0bb3700',
			password: '7b47ad49',
			database: 'heroku_5e5e3062356911b',
		},
		'single'
	)
);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// routes
app.use('/', personRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(PORT, () => {
	console.log('Server corriendo en el puerto 4000');
});
