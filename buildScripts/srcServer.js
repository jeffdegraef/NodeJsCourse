import express from 'express';
import path from 'path';
import open from 'open';

//ensures linting errors for console are not shown
/* eslint-disable no-console */

//import webpack
import webpack from 'webpack';
import config from '../webpack.config.dev';

//Express server
const port = 3000;
const app = express();

//Webpack compiler
const compiler = webpack(config);

//attached webpack compiler to express server
app.use(require('webpack-dev-middleware')(compiler,{
    noInfo:true,
    publicPath:config.output.publicPath
}));

//main route
app.get('/',function (req,res) {
    res.sendFile(path.join(__dirname,'../src/index.html'));
});

//launch webserver on port 3000
app.listen(port,function (err) {
    if(err){
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});



