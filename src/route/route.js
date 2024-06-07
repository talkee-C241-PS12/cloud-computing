const express = require("express")
const verify = require("./middleware/auth")

const intilizeroute = (express)=>{
    const newmiddleware = express()
    newmiddleware.use("/middleware",verifymiddleware)
    newmiddleware.get("/middleware/test",(req,res)=>{
    console.log(req.datapayload)
    res.send("passed")
})
    express.use(newmiddleware)
}

module.exports = getprofileroute