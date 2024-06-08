const express = require("express")
const getprofilecontroller = require("../controller/getprofilecontroller")
const postregistercontroller = require("../controller/postregistercontroller")
const verifymiddleware = require("../middleware/auth")
const getkelascontroller = require("../controller/getkelascontroller")
const getkelasdetailcontroller = require("../controller/getkelasdetailcontroller")
const getgamecontroller = require("../controller/getgamecontroller")
const getgamedetailcontroller = require("../controller/getgamedetailcontroller")
const postprofilecontroller = require("../controller/postprofilecontroller")
const multer = require("multer")


const intilizeroute = (expressNode)=>{
    const upload = multer()
    const newmiddleware = express()
    newmiddleware.use(upload.any(),verifymiddleware)
    newmiddleware.get("/api/test",(req,res)=>{
        console.log(req.datapayload)
        res.send("passed")
    })
    newmiddleware.get("/api/profile",getprofilecontroller)
    newmiddleware.post("/api/register",postregistercontroller)
    newmiddleware.post("/api/profile",postprofilecontroller)
    expressNode.get("/api/kelas",getkelascontroller)
    expressNode.get("/api/kelas/detail",getkelasdetailcontroller)
    expressNode.get("/api/game",getgamecontroller)
    expressNode.get("/api/game/detail",getgamedetailcontroller)
    expressNode.use(newmiddleware)
}

module.exports = intilizeroute