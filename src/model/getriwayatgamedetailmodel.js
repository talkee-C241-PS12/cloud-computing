const database = require("../database/firebase")

const getriwayatgamedetailmodel = async (email,idgame)=>{
    const users = database.collection("users").doc(email)
    const letgame = users.collection("riwayat").doc(idgame)
    let datagame
    let pertanyaan = []
    await letgame.get().then(doc=>{
        datagame=doc.data()
    })
    await letgame.collection("pertanyaan").get().then((collection)=>{
        collection.forEach((doc)=>{
            pertanyaan.push(doc.data())
        })
    })
    datagame.pertanyaan=pertanyaan
    return datagame
}

module.exports =getriwayatgamedetailmodel