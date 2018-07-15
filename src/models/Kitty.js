var mongoose = require('mongoose');
var kittySchema = mongoose.Schema({
    name: String
});
kittySchema.methods.speak = function () {
    var greeting = this.name ? "Meow, am " + this.name : "ain got name";
    console.log(greeting);
}
var Kitten = mongoose.model('Kitten', kittySchema);
module.exports = Kitten;