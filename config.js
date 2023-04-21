
//firebase
const firebase = require("firebase/app");
const firebaseStore = require('firebase/firestore/lite');
//express
const express = require('express');
//refresh
const morgan = require('morgan');
const app = express();
//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//boday parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//for each router
const underscore = require('underscore');
//database
require('dotenv').config();

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
};
const connection = firebase.initializeApp(firebaseConfig);
const db =  firebaseStore.getFirestore(connection);

module.exports = {
    db: db,
    firebaseStore: firebaseStore,
    underscore: underscore,
    app: app,
    port: process.env.API_PORT || 3000,
}