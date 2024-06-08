const getkelasdetailmodel = require("../model/getkelasdetailmodel")

const getkelasdetailcontroller = async (req,res)=>{
    const idkelas=req.query.idkelas
    try{

        let message = await getkelasdetailmodel(idkelas)
        message["status"]="success"
        res.send(message)
    } catch(Error){
        res.send({
            error:Error
        })
    }
}

module.exports = getkelasdetailcontroller