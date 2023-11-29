require('dotenv').config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const YAML = require("yamljs");
const morgan = require('morgan');

app.use(cors()) // enable cors for all routes


//for swagger documentation
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = YAML.load("./swagger.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// common middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// for logging the api's call
app.use(morgan('tiny'));



// import all routes
const taskRoute = require("./routes/taskRoute");



// middleware routes
app.use("/api/v1", taskRoute);



app.get('/api/v1/test', (req,res)=>{
    res.send("Hello world");
})


module.exports = app;