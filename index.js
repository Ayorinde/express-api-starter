

var express = require('express');
var theKitten = require('./src/controllers');
require('./src/mongo');
const app = express()

//var saveKitten = controller();
//console.log(JSON.stringify(theKitten.saveKitten(req, res, next), null, 4))

//app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', theKitten.saveKitten)

app.listen(3000, () => console.log('Example app listening on port 3000!'))
