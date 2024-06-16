const getgamemodel = require("../model/getgamemodel")

const getgamecontroller = async (req,res)=>{
    try{
        let data = await getgamemodel()
        const message = {
            "status" : "success",
            "data" : data
        }
        res.send(message)
    }catch(error){
        res.status(400).send({
            "error":error.message
        })
    }
}

module.exports = getgamecontroller