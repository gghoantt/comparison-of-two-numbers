var compare = function(a, b, callback) {

	if (isNaN(a) && isNaN(b)) {
		var err = new Error('a and b are not number');
		return callback(err);
	}

	if (isNaN(a)) {
		var err = new Error('a is not a number');
		return callback(err);
	}

	if (isNaN(b)) {
		var err = new Error('b is not a number');
		return callback(err);
	}

	if (a > b) {
		var message = a+' greater than '+b;
	} else if (a < b) {
		var message = a+' less than '+b;
	} else {
		var message = a+' equal '+b;
	}

	return callback(null, message);
}

module.exports = {
	compare: compare
}
