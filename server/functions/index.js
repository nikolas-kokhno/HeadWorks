const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const { getAllUsers } = require('./routes/Users/users');

app.get('/users', getAllUsers);

exports.api = functions.https.onRequest(app);