const postprofilemodel = require("../model/postprofilemodel")

const postprofilecontroller = async (req,res)=>{
    try{
        let image = req.files[0]
        let nama = req.body.nama
        let email = req.datapayload.email
        await postprofilemodel(email,nama,image)
        res.send({
            "status":"success"
        })
    } catch(error){
        res.status(400).send({
            error:error.message
        })
    }
}

module.exports = postprofilecontroller