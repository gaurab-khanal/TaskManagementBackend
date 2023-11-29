const app = require('./app');



const {PORT} = process.env || 4000;


// global error handler
app.use((err,req,res, next)=>{
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);

    res.status(500).json({
        message: "Something went wrong"
    });
});


app.listen(PORT, ()=>{console.log(`Listening on port http://localhost:${PORT}`)})