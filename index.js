const express = require('express');
const cors = require('cors');
const app = express();
const appointmentsRouter = require('./controllers/appointments');

app.use(cors());
app.use(express.json());
app.use('/api', appointmentsRouter);

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
