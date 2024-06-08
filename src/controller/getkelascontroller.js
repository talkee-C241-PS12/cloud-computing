const getkelasmodel = require("../model/getkelasmodel")

const getkelascontroller = async (req,res)=>{
    const kelas = await getkelasmodel()
    const message = {
        "status":"success",
        "data": kelas
    }
    res.send(message)
}

module.exports = getkelascontroller