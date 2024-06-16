const getriwayatgamemodel = require("../model/getriwayatgamemodel")

const getriwayatgamecontroller = async (req,res)=>{
    try{
        let email = req.datapayload.email
        let data = await getriwayatgamemodel(email)
        res.send({
            "status":"success",
            "data":data
        })
    }catch(error){
        res.status(400).send({
            "error":error.message
        })
    }
}

module.exports = getriwayatgamecontroller