var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var relay1 = false;
var relay2 = false;
var relay3 = false;
var relay4 = false;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
 
/*app.get('/', function (req, res) {
  res.send('Hello World')
})*/

app.post('/update', function (req, res) {

    console.log(req.body);
    
    relay1 = req.body.relay1;
    relay2 = req.body.relay2;
    relay3 = req.body.relay3;
    relay4 = req.body.relay4;

    res.json({})
})



app.get('/state', function (req, res) {
    
    let data = {
        relay1,
        relay2,
        relay3,
        relay4
    }

    res.json(data)
})


app.listen(3000)