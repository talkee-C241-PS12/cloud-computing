const getgamedetailmodel = require("../model/getgamedetailmodel")

const getgamedetailcontroller = async (req,res) =>{
    let idgame = req.query.idgame
    let data = await getgamedetailmodel(idgame)
    data["status"] = "success"
    res.send(data)
}

module.exports = getgamedetailcontroller