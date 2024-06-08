const getgamemodel = require("../model/getgamemodel")

const getgamecontroller = async (req,res)=>{
    let data = await getgamemodel()
    const message = {
        "status" : "success",
        "data" : data
    }
    res.send(message)
}

module.exports = getgamecontroller