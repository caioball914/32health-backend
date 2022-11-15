require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const admin = require('firebase-admin');
const serviceAccount = require('../src/common/health-b7908-firebase-adminsdk-crbda-02e7537e0d.json');

app.use(express.urlencoded({
    extended: true
}))
app.use(cors())

const port = process.env.APP_PORT || 8080;
const host = process.env.APP_HOST || '127.0.0.1';

// initializing firebase app
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL
})

const router = require('./routes');
app.use('/', router);
app.listen(port, host);

console.log(`Server listening at ${host}:${port}`);
