var compare = (a, b, callback) => {
  let message;
  let err;

  if (isNaN(a) && isNaN(b)) {
    err = new Error('a and b are not number');
    return callback(err);
  }

  if (isNaN(a)) {
    err = new Error('a is not a number');
    return callback(err);
  }

  if (isNaN(b)) {
    err = new Error('b is not a number');
    return callback(err);
  }

  if (a > b) {
    message = a + ' greater than ' + b;
  } else if (a < b) {
    message = a + ' less than ' + b;
  } else {
    message = a + ' equal ' + b;
  }

  return callback(null, message);
};

module.exports = {
  compare
};
