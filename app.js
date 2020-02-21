const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const express = require('express');
const path=require('path');
const app = express();

app.set('view engine', 'ejs');

//io setup
const http = require("http").Server(app);
const port = process.env.PORT || 3000;
/*
app.get('/', (req, res) => {
    res.send('Hello Express')
});*/
const publicPath=path.join(__dirname,'/public');
app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Import the mongoose module
var mongoose = require('mongoose');

var mongoDB = 'mongodb+srv://PrisonSE:Prison%2E@cluster0-0na0d.mongodb.net/Prison_Management?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
console.log("Mongoose connected");
///////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Routes
app.use('/api', routes);


/////////////////////////////////////////////////////////////////////////////////////////////////////////


http.listen(port, function() {
    console.log("Listening on *:" + port);
});
