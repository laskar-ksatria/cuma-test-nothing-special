//dependencies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//enable dotenv
dotenv.config();

//mongodb.connect
require('./config/db.connect')(mongoose);

//variable
const PORT = process.env.PORT;
const app = express();

//app.use
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//main router
app.use(require('./routes'));

app.listen(PORT, () => console.log(`Server started on ${PORT}`));