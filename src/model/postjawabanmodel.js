const database = require("../database/firebase")

const postjawabanmodel = async (email,idpertanyaan,jawaban)=>{
    let current = database.collection("current").doc(email).collection("pertanyaan")
    let pertanyaan 
    await current.doc(idpertanyaan).get().then(doc=>{
        if (doc.exists){
            pertanyaan=doc.data()
        }else{
            throw new Error("Non existing data")
        }
    })
    pertanyaan.jawabanuser=jawaban
    await current.doc(idpertanyaan).set(pertanyaan)
    return pertanyaan.jawaban==pertanyaan.jawabanuser
}

module.exports = postjawabanmodel