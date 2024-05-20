const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
// const { connect } = require('mongoose');
require('dotenv').config();

//! middleware 
app.use(express.static('./public'))
app.use(express.json());


//! routes 
app.use('/api/v1/tasks', tasks);


const PORT = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, console.log(`Server is listening on port:  ${PORT}...`))
    }
    catch(err) {
        console.log(err);
    }
}

start();



