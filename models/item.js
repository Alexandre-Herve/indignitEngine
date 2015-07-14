var mongoose = require('mongoose');

module.exports = mongoose.model('Item', {
    author: String,
    text: String 
});
