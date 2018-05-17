import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

//ensures linting errors for console are not shown
/* eslint-disable no-console */

//import webpack
import webpack from 'webpack';
import config from '../webpack.config.dev';

//Express server
const port = 3000;
const app = express();

//use compression
app.use(compression());
//add this to server static files
app.use(express.static('dist'));

//main route
app.get('/',function (req,res) {
    res.sendFile(path.join(__dirname,'../dist/index.html'));
});


//add new route as api endpoint, will return static user data

app.get('/users',function (req,res) {
    res.json([
        {"id" : 1, "firstName": "Bob","lastName": "Smith","email":"bob@gmail.com"},
        {"id" : 2, "firstName": "Elke","Vangodtsnoven": "Smith","email":"elke@gmail.com"},
        {"id" : 3, "firstName": "Jeff","lastName": "De Graef","email":"jeff@gmail.com"},
    ]);
});

//launch webserver on port 3000
app.listen(port,function (err) {
    if(err){
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});



