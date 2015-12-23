var mongoose = require('mongoose');

var ProductDescriptionSchema = new mongoose.Schema ({
	productID:{type:String},
	price:{type:String},
	minimum:{type:Number},
	dueDate:{type:Date},
	description:{type:String},
	material:{type:String},
	shipping:{type:String},
	source:{type:String}
});

module.exports = mongoose.model('ProductDescription', ProductDescriptionSchema);