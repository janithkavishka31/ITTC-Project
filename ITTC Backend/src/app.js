const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');
const moduleRoutes = require('./routes/moduleRoutes');
const examResultRoutes = require('./routes/examResultRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => { res.send('Welcome to the ITTC Backend API!'); });

app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);
app.use('/modules', moduleRoutes);
app.use('/examResults', examResultRoutes);

module.exports = app;
