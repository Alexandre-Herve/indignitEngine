var t = require('./tracker/tracker');
var db = require('./database/database');
var Item = require('./models/item');

t.on('tweet', function (tweet) {
    var item = new Item({
        text: tweet.text,
        author: tweet.author
    });
    item.save(function (err) {
        console.log('saved');
        if (err) {
            console.log('err', err);
        }
    });
});
 
t.on('error', function (err) {
      console.log('Oh no')
});

t.track('#thisIsACoup');

