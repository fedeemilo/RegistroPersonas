const QRCode = require('qrcode');

QRCode.toString('36374260', function (err, url) {
	console.log(url);
});

const controller = {};

controller.list = (req, res) => {
	req.getConnection((err, conn) => {
		conn.query('SELECT * FROM person', (err, persons) => {
			if (err) {
				res.json({
					ok: false,
					err,
				});
			}

			res.render('persons', {
				data: persons,
			});
		});
	});
};

controller.save = async (req, res) => {
	const data = req.body;

	const QR = await (await QRCode.toDataURL(data.dni.toString()));

	let person = {
		name: data.name,
		lastname: data.lastname,
		dni: data.dni,
		address: data.address,
		phone: data.phone,
		email: data.email,
		text: data.text,
		qr_code: QR,
	};

	req.getConnection((err, conn) => {
		conn.query('INSERT INTO person SET ?', [person], (err, personDB) => {
			if (err) {
				res.json({
					ok: false,
					err,
				});
			}

			res.redirect('/');
		});
	});
};

controller.edit = (req, res) => {
	let id = req.params.id;

	req.getConnection((err, conn) => {
		conn.query('SELECT * FROM person WHERE id = ?', [id], (err, personDB) => {
			res.render('person_edit', {
				data: personDB[0],
			});
		});
	});
};

controller.update = (req, res) => {
	let id = req.params.id;
	let data = req.body;

	let newPerson = {
		name: data.name,
		lastname: data.lastname,
		dni: data.dni,
		address: data.address,
		phone: data.phone,
		email: data.email,
		text: data.text,
		qr_code: data.qr_code,
	};

	req.getConnection((err, conn) => {
		conn.query(
			'UPDATE person SET ? WHERE id = ?',
			[newPerson, id],
			(err, personDB) => {
				if (err) {
					res.json({
						ok: false,
						err,
					});
				}

				res.redirect('/');
			}
		);
	});
};

controller.delete = (req, res) => {
	let id = req.params.id;

	req.getConnection((err, conn) => {
		conn.query('DELETE FROM person WHERE id = ?', [id], (err, personDB) => {
			if (err) {
				res.json({
					ok: false,
					err,
				});
			}

			res.redirect('/');
		});
	});
};

controller.getQR = (req, res) => {

	let id = req.params.id;

	req.getConnection((err, conn) => {
		conn.query('SELECT * FROM person WHERE id = ?', [id], (err, personDB) => {
			res.render('person_qrcode', {
				data: personDB[0]
			})
		})
	})
}

module.exports = controller;
