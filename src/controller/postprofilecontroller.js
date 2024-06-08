const postprofilemodel = require("../model/postprofilemodel")

const postprofilecontroller = async (req,res)=>{
    try{
        let image = req.files[0]
        let nama = req.body.nama
        let email = req.datapayload.email
        await postprofilemodel(email,nama,image)
    } catch(Error){
        res.send({
            error:Error
        })
    }
    res.send({
        "status":"success"
    })
}

module.exports = postprofilecontroller