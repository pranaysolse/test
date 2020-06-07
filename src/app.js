const express = require('express')
const app = express()


app.get('/',(req,res)=>{
    res.send("name: ",req.query.name);
});

app.listen(5000,(error)=>{
    if(error){
        return console.log("error: ",error);
    }
    return console.log("listening on port 5000")
})

// simple test function for jest to work with 

