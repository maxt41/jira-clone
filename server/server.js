const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');

connectDB();

app.use(express.json());
app.use(cors({origin: 'http://localhost:3000'}));

app.use('/api/ticket', require('./routes/api/ticket'))

app.set('port', process.env.PORT || 1000);

app.listen(app.get('port'), () => console.log(`Server started on port ${app.get('port')}`));