const postjawabanmodel =  require("../model/postjawabanmodel")
const postjawabanchecktruth = require("../model/postjawabanchecktruth")
const posttoriwayatfromcurrentanddeletemodel = require("../model/posttoriwayatfromcurrentanddeletemodel")
const fs =require("fs")
const FormData = require("form-data")
const axios = require('axios')


const postjawabancontroller =  async (req,res)=>{
    let email = req.datapayload.email
    let idpertanyaan = req.body.idpertanyaan
    let jawaban
    let result
    if (req.body.tipe=="0"){
        const formData = new FormData();
        formData.append('video', req.files[0].buffer,{filename:req.files[0].mimetype});
        console.log(process.env.MLURL)
        await axios.post(process.env.MLURL,formData, {
            method: 'POST',
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then((resd)=>{
            result=resd  
        })
        
        jawaban = result.data["message"]
        try{
        }catch(error){
            res.send({"error":error})
            return
        }
    }else{
        jawaban=req.body.jawaban
    }
    let hasil = await postjawabanmodel(email,idpertanyaan,jawaban)
    let checktruth=await postjawabanchecktruth(email)
    if (checktruth.process){
        posttoriwayatfromcurrentanddeletemodel(email,checktruth.poin)
    }
    res.send({
        "status":"success",
        "hasil":hasil,
        "process":checktruth.process
    })
}
module.exports = postjawabancontroller

