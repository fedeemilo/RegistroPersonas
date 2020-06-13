const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const dbConfig = require('../src/config/db.config.js');
var methodOverride = require('method-override');
const myConnection = require('express-myconnection');

const app = express();

// importing routes
const personRoutes = require('./routes/person');

// settings
app.set('port', process.env.PORT || 4000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(
	myConnection(
		mysql,
		{
			host: process.env.DB_HOST,
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_DATABASE,
			port: 3306,
		},
		'single'
	)
);
console.log(process.env.DB_DATABASE)

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// routes
app.use('/', personRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
	console.log('Server corriendo en el puerto 4000');
});
