const getriwayatgamemodel = require("../model/getriwayatgamemodel")

const getriwayatgamecontroller = async (req,res)=>{
    let email = req.datapayload.email
    let data = await getriwayatgamemodel(email)
    res.send({
        "status":"success",
        "data":data
    })
}

module.exports = getriwayatgamecontroller