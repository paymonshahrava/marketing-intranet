var mongoose = require('mongoose');

module.exports = mongoose.model('Product', {
	text : {type : String, default: ''}
});