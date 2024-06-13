const postgamestartmodel = require("../model/postgamestartmodel")

const postgamestartcontroller = async(req,res)=>{
    let email = req.datapayload.email
    let idgame = req.body.idgame
    let data = await postgamestartmodel(idgame,email)
    data["status"]="success"
    res.send(data)
}

module.exports = postgamestartcontroller