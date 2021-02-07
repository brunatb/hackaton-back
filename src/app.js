require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('./utils/loadRelationships');

const app = express();
const professionsRouter = require('./routers/professionsRouter');
const skillsRouter = require('./routers/skillsRouter');

app.use(cors());
app.use(express.json());

app.use('/professions', professionsRouter);
app.use('/skills', skillsRouter);

module.exports = app;
