const getprofilemodel = require("../model/getprofilemodel")

const getprofilecontroller = async (req,res)=>{
    try{
        const email = req.datapayload.email
        const data = await getprofilemodel(email)
        var message = {
            "nama" : data.nama,
            "email" : data.email,
            "poin" : data.poin,
            "leaderboard": data.leaderboard,
            "image" : data.image,
            "riwayat" : data.riwayat
        }
        res.status(200)
        res.send(message)
    }catch(error){
        res.status(400).send({
            "error":error.message
        })
    }
}

module.exports = getprofilecontroller