module.exports = {
	HOST: process.env.DB_HOST || '127.0.0.1',
	USER: process.env.DB_USER,
	PASSWORD: process.env.DB_PASSWORD,
	DB: process.env.DB_DATABASE,
};
