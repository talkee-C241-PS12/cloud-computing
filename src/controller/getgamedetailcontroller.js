const getgamedetailmodel = require("../model/getgamedetailmodel")

const getgamedetailcontroller = async (req,res) =>{
    try{
        let idgame = req.query.idgame
        if (idgame==null){
            throw new Error("missing query")
        }
        let data = await getgamedetailmodel(idgame)
        data["status"] = "success"
        res.send(data)
    }catch(error){
        res.status(400).send({
            "error":error.message
        })
    }
}

module.exports = getgamedetailcontroller