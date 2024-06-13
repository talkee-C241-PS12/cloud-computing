const database = require("../database/firebase")

const getriwayatgamemodel =async (email)=>{
    let riwayat = []
    const users = database.collection("users").doc(email).collection("riwayat")
    await users.get().then((collection)=>{
        collection.forEach((doc)=>{
            riwayat.push(doc.data())
        })
    })
    return riwayat
}

module.exports = getriwayatgamemodel