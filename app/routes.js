var Product = require('./models/product');

function getProducts(res){
	Product.find(function(err, products) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(products); // return all todos in JSON format
		});
};

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all todos
	app.get('/api/products', function(req, res) {

		// use mongoose to get all todos in the database
		getProducts(res);
	});

	// create todo and send back all todos after creation
	app.post('/api/products', function(req, res) {

		// create a todo, information comes from AJAX request from Angular
		Product.create({
			text : req.body.text,
			done : false
		}, function(err, product) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			getProducts(res);
		});

	});

	// delete a todo
	app.delete('/api/products/:product_id', function(req, res) {
		Todo.remove({
			_id : req.params.product_id
		}, function(err, product) {
			if (err)
				res.send(err);

			getProducts(res);
		});
	});

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};