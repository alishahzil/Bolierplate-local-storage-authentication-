const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const cors = require('cors');


// Load env vars
dotenv.config({
  path: './config/config.env'
});


// Connect to database
connectDB();

const corsConfig = {
  origin: true,
  credentials: true,
};
// Route files
const User = require('./routes/user');


const app = express()
// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());



// Enable CORS
app.use(cors(corsConfig));

// Mount routers
app.use('/api/user', User);



const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);  