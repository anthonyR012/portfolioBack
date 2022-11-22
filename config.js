require('dotenv').config()
//express
const express = require('express');
//refresh
const morgan = require('morgan');
const app = express();
//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
//boday parser
const bodyParser = require('body-parser');
app.use( bodyParser.urlencoded({ extended: true }) );
app.use( bodyParser.json() );
const admin = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

//for each router
const underscore = require('underscore');
//database
var serviceAccount =  process.env.KEY;
admin.initializeApp({
    credential: admin.cert(serviceAccount),
});

const db = getFirestore();


module.exports = {
    api: {
        db: db,
        underscore: underscore,
        app:app,
        port: process.env.API_PORT || 8000,
    },
}