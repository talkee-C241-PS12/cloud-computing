const getkelasmodel = require("../model/getkelasmodel")

const getkelascontroller = async (req,res)=>{
    try{
        const kelas = await getkelasmodel()
        const message = {
            "status":"success",
            "data": kelas
        }
        res.send(message)
    }catch(error){
        res.status(400).send({
            "error":error.message
        })
    }
}

module.exports = getkelascontroller