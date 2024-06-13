const getriwayatgamedetailmodel =  require("../model/getriwayatgamedetailmodel")

const getriwayatgamedetailcontroller = async (req,res) => {
    let email = req.datapayload.email
    let idriwayat = req.query.idriwayat
    let gamedata = await getriwayatgamedetailmodel(email,idriwayat)
    gamedata["status"] = "success"
    res.send(gamedata)
}

module.exports = getriwayatgamedetailcontroller