const postgamestartmodel = require("../model/postgamestartmodel")

const postgamestartcontroller = async(req,res)=>{
    try{
        let email = req.datapayload.email
        let idgame = req.body.idgame
        if(idgame==null){
            throw new Error("missing query")
        }
        let data = await postgamestartmodel(idgame,email)
        data["status"]="success"
        res.send(data)
    }catch(error){
        res.status(400).send({
            "error":error.message
        })
    }
}

module.exports = postgamestartcontroller