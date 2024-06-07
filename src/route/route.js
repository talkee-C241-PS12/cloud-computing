const express = require("express")
const verifymiddleware = require("./middleware/auth")

const intilizeroute = (expressNode)=>{
    const newmiddleware = express()
    newmiddleware.use("/middleware",verifymiddleware)
    newmiddleware.get("/middleware/test",(req,res)=>{
    console.log(req.datapayload)
    res.send("passed")
})
    expressNode.use(newmiddleware)
}

module.exports = getprofileroute