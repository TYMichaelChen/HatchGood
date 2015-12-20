var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new mongoose.Schema ({
	username:{
		type: String,
		unique:true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	firstName: {type:String},
	lastName: {type:String},
	email: {type:String},
	userRole: {type:Number},
	approvedSeller: {type:Number}
});

//Hash Password before each save
UserSchema.pre('save', function(callback){
	var user = this;

	//if password doesn't change
	if(!user.isModified('password')) return callback();

	bcrypt.genSalt(5, function(err, salt){
		if (err) return callback(err);

		bcrypt.hash(user.password, salt, null, function(err, hash){
			if(err) return callback(err);
			user.password = hash;
			callback();
		})
	})
});

module.exports = mongoose.model('User', UserSchema);