const getkelasdetailmodel = require("../model/getkelasdetailmodel")

const getkelasdetailcontroller = async (req,res)=>{
    try{
        const idkelas=req.query.idkelas
        if (idkelas==null){
            throw new Error("missing query")
        }
        let message = await getkelasdetailmodel(idkelas)
        message["status"]="success"
        res.send(message)
    } catch(error){
        res.status(400).send({
            "error":error.message
        })
    }
}

module.exports = getkelasdetailcontroller