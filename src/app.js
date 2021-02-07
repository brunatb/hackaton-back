require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('./utils/loadRelationships');

const app = express();
const professionsRouter = require('./routers/professionsRouter');

app.use(cors());
app.use(express.json());

app.use('/professions', professionsRouter);

module.exports = app;
