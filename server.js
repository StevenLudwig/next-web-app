const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();

	server.get('/', (req, res) => {
		return app.render(req, res, '/', req.query);
	});

	server.get('/computers/:computer_id', (req, res) => {
		return app.render(req, res, '/computerDetail', req.query);
	});

	server.get('/add', (req, res) => {
		return app.render(req, res, '/addComputer', req.query);
	});

	server.get('*', (req, res) => {
		return handle(req, res);
	});

	server.listen(3000, (err) => {
		if (err) throw err
		console.log('> Ready on http://localhost:3000');
	});
});