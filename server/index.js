// IMPORT FROM PACKAGES
const express = require('express');
const mongoose = require('mongoose');
// IMPORT FROM OTHER FILES
const authRouter = require('./route/auth');




// INIT
const app = express();
const PORT = 3000;
const DB = "mongodb+srv://salman:salman8944200@cluster0.3tydeyp.mongodb.net/?retryWrites=true&w=majority"
// MIDDLEWARE
// client -> middleware -> server -> client
app.use(authRouter);

// Connection
mongoose.connect(DB).then(()=> {
    console.log('connection sucessfull to database');
}) 
.catch((e)=>{
console.log(e);
})  


app.listen(PORT,"0.0.0.0" , () => {
    console.log('Connected to Port ' + PORT );
});