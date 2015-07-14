var Twitter = require('node-tweet-stream');
var config = require('./config/config');

module.exports = new Twitter({
    consumer_key: config.consumer_key,
    consumer_secret: config.consumer_secret,
    token: config.token,
    token_secret: config.token_secret
});

