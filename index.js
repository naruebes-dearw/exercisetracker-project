const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'development') app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true })
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/api/exercises', exercisesRouter);
app.use('/api/users', usersRouter);

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    });
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
    console.log(`http://localhost:${port}`);
});