const express = require('express');

const authRouter = express.Router();


authRouter.post('/api/signup',(req,res)=> {
    // get data from client
   const {name , email , password}  = req.body;
    // save it in database

    // return that data


    

});

module.exports = authRouter;