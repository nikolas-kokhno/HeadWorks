const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const { getAllUsers, addUser } = require('./routes/Users/users');

app.get('/users', getAllUsers);
app.post('/users', addUser);

exports.api = functions.https.onRequest(app);