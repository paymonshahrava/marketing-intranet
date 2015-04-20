var mongoose = require('mongoose');

module.exports = mongoose.model('Product', {
	Name : {type : String, default: ''},
	Description: {type : String, default: ''},
	ThumbnailUrl: {type : String, default: ''}
});