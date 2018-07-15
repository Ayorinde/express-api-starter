var Kitten = require('../models/Kitty');
var theKitten = {
    saveKitten: function (req, res, next) {
        var fluffy = new Kitten({ name: 'fluffy2' });
        fluffy.save(function (err, fluffy) {
            if (err) return console.error(err);
            fluffy.speak();
            res.send('Kitten saved!')
        });

    }
}
module.exports = theKitten;
