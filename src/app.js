require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const quizzRouter = require('./routers/quizzRouter');

app.use(cors());
app.use(express.json());

app.use('/quizz', quizzRouter);

module.exports = app;
