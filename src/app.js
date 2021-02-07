require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('./utils/loadRelationships');

const app = express();
const professionsRouter = require('./routers/professionsRouter');

app.use(cors());
app.use(express.json());

app.use('/professions', professionsRouter);

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => res.status(500).json(error));

module.exports = app;
