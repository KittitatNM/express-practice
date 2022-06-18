const express = require('express');
const app = express();
const task = require('./routes/task.route');

const connectDB = require('./dbs/task.db');
require('dotenv').config();

app.use(express.json());

app.use('/api/v1/tasks', task);

const PORT = 3000 || process.env.PORT;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`Server start on port : ${PORT}`);
        })
    } catch (err) {
        console.log(err);
    }
}

start();