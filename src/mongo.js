var mongoose = require('mongoose');

var uri = "mongodb://localhost/test1"
mongoose.connect(uri);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('mongodb running yo!');// we're connected!
});