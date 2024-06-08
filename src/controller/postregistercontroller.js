const postregistermodel = require("../model/postregistermodel")

const postregistercontroller = async (req,res)=>{
    const email=req.datapayload.email
    let nama
    if (req.body.nama==undefined){
        nama = req.datapayload.nama
    } else {
        nama = req.body.nama
    }
    const image=req.files[0]
    await postregistermodel(image,nama,email)
    const message = {
        "status" : "success"
    }
    res.send(message)
}

module.exports = postregistercontroller