const database = require("../database/firebase")

const getcurrentjawabanmodel = async (email,idpertanyaan) =>{
    const current = database.collection("current").doc(email).collection("pertanyaan")
    const pertanyaan = current.doc(idpertanyaan)
    let data
    console.log(idpertanyaan)
    await pertanyaan.get().then((doc)=>{
        data = doc.data()
    })
    return data
}

module.exports = getcurrentjawabanmodel