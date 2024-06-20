const getleaderboardmodel = require("../model/getleaderboardmodel")

const getleaderboardcontroller = async (req,res)=>{
    try {
        let data = await getleaderboardmodel()
        res.send({
            "status":"success",
            "data":data
        })
    }catch(error){
        res.status(400).send({
            "error":error.message
        })
    }
}

module.exports = getleaderboardcontroller