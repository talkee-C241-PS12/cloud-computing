const postjawabanmodel =  require("../model/postjawabanmodel")
const postjawabanchecktruth = require("../model/postjawabanchecktruth")
const posttoriwayatfromcurrentanddeletemodel = require("../model/posttoriwayatfromcurrentanddeletemodel")
const getcurrentjawabanmodel = require("../model/getcurrentjawabanmodel")
const increaseuserpoiniffirest = require("../model/increaseuserpoiniffirest")
const fs =require("fs")
const FormData = require("form-data")
const axios = require('axios')


const postjawabancontroller =  async (req,res)=>{
    try{
        let email = req.datapayload.email
        let idpertanyaan = req.body.idpertanyaan
        if(idpertanyaan==null){
            throw new Error("missing body")
        }
        let jawaban
        let result
        let pertanyaan = await getcurrentjawabanmodel(email,idpertanyaan)
        if (pertanyaan.tipe=="0"){
            const formData = new FormData();
            formData.append('video', req.files[0].buffer,{filename:req.files[0].mimetype});
            await axios.post(process.env.MLURL,formData, {
                method: 'POST',
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then((resd)=>{
                result=resd  
            })
            jawaban = result.data["message"]
        }else{
            jawaban=req.body.jawaban
        }
        let hasil = await postjawabanmodel(email,idpertanyaan,jawaban)
        let checktruth=await postjawabanchecktruth(email)
        if (checktruth.process){
            increaseuserpoiniffirest(email,checktruth.poin)
            posttoriwayatfromcurrentanddeletemodel(email,checktruth.poin)
        }
        res.send({
            "status":"success",
            "hasil":hasil,
            "process":checktruth.process
        })
    }catch(error){
        res.status(400).send({
            "error":error.message
        })
    }
}
module.exports = postjawabancontroller

