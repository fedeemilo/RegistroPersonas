// ============================
//  Entorno
// ============================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ============================
//  Base de Datos
// ============================

let dbHost, dbUser, dbPassword, dbDataBase;

if (process.env.NODE_ENV === 'dev') {
	dbHost = '127.0.0.1';
	dbUser = 'root';
	dbPassword = 'Gracias2020!';
	dbDatabase = 'registro_personas_db';
} else {
	dbHost = process.env.DB_HOST;
	dbUser = process.env.DB_USER;
	dbPassword = process.env.DB_PASSWORD;
	dbDatabase = process.env.DB_DATABASE;
}


process.env.DB_HOST = dbHost;
process.env.DB_USER = dbUser;
process.env.DB_PASSWORD = dbPassword;
process.env.DB_DATABASE = dbDatabase;
