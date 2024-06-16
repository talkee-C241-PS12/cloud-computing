const getriwayatgamedetailmodel =  require("../model/getriwayatgamedetailmodel")

const getriwayatgamedetailcontroller = async (req,res) => {
    try{
        let email = req.datapayload.email
        let idriwayat = req.query.idriwayat
        if(idriwayat==null){
            throw new Error("missing query")
        }
        let gamedata = await getriwayatgamedetailmodel(email,idriwayat)
        gamedata["status"] = "success"
        res.send(gamedata)
    }catch(error){
        res.status(400).send({
            "error":error.message
        })
    }
}

module.exports = getriwayatgamedetailcontroller