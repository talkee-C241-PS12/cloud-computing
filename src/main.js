const express = require("express")
const cors = require("cors")
const verifymiddleware = require("./middleware/auth")
require('dotenv').config();

//intilize app
const app = express()
const newmiddleware = express()

app.use(cors())
app.set("query parser","simple")

newmiddleware.use("/middleware",verifymiddleware)
newmiddleware.get("/middleware/test",(req,res)=>{
    console.log(req.datapayload)
    res.send("passed")
})
app.use((err,req,res,next)=>{
    res.status(err.status || 500).send(err.message || 'Internal Server Error');
})
app.use(newmiddleware)

app.listen(3000,'localhost',()=>{
    console.log("started")
})