const getprofilemodel = require("../model/getprofilemodel")

const getprofilecontroller = async (req,res)=>{
    const email = req.datapayload.email
    const data = await getprofilemodel(email).catch((err)=>{
        res.send({
            "error":"failed get data"+err
        })
    })
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
}

module.exports = getprofilecontroller