/*--------------module imports--------------*/
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
//const ejs = require('ejs');
const keywords= require('./routes/keywords');
const single = require('./routes/single');


/*------------Express App-----------------*/
const app = express();

/*-------------File Imports---------------*/
const config = require('./config');
const images = require('./routes/images');


/*------------Database Connection--------*/
mongoose.connect(config.db, err=>{
    if(err)
        console.log(`Error connecting database: ${err}`);
    else
        console.log(`Successfully connected to database!Cheers!`);
});


/*-------------Middlewares----------------*/

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'ejs');
app.set('views', 'views');


/*---------------Routes---------------------*/
app.use('/list', keywords);
app.use('/fetch', images);

app.use('/keyword', single);

app.get('/', (req,res)=>{
    res.render('home');
});
app.get('*', (req,res)=>{
    res.render('home');
});

/*---------------Server---------------------*/
app.listen(config.port, err=>{
    if(err) throw err;
    console.log(`Server is dancing on floor: ${config.port}`);
});
