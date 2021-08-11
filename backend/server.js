const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({
  path: './config/config.env'
});


// Connect to database
connectDB();


// Route files
const bootcamps = require('./routes/bootcamps');
const courses = require('./routes/courses');

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());



// Enable CORS
app.use(cors());

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);
app.use('/api/v1/courses', courses);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);  