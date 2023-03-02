const express=require('express')
const app=express()
const bodyParser = require("body-parser");

let usStates = require("./db.json");

var http=require('http')
//const server = http.createServer(app);
var fs=require('fs')

const logger=require('morgan')
const cors=require('cors')
const PORT=3000;
app.use(logger('dev'))//logging details
app.use(cors());//cor policy
app.use(express.urlencoded({extended:true}))
app.use(express.json());


const getReq = require("./routes/getreq");
app.use('/details',getReq)

const postReq = require("./routes/postreq");
app.use('/details',postReq)

const putReq = require("./routes/putreq");
app.use('/details',putReq)

const deleteReq = require("./routes/deletereq");
app.use('/details',deleteReq)


// app.get("/details", (req, res) => {
//     res.send("get the details");
//   });



app.listen(PORT,function(){
    console.log(`server running on port :http://localhost:${PORT}`)
});