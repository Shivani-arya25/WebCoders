const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const error = require('./middlewares/errorMiddlewareHandler');
const usersRoute = require('./routes/usersRoute');
require('./config/dbConnect')();

const app = express();

//Passing body data
app.use(express.json());

//Routes
app.use('/api/users', usersRoute);

//Error middleware
app.use(error.errorMiddlewareHandler);


//Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//Webcoders;
//xnzBPZJopiq3QyPq;
//mongodb+srv://Webcoders:<password>@cluster0.6u2uf.mongodb.net/test