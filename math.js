const _ = require('lodash');

module.exports = {
  findMax: function(values) {
    if(!values || values.length < 2 || !values.length) {
      throw new Error("invalid parameters");
    }

    if(!values.every(v => typeof(v) === 'number')) {
      throw new Error("array values must be numbers");
    }

    return values.sort().slice(2).reverse();
  }
}
