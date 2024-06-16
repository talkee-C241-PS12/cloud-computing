const database = require("../database/firebase")
const { Firestore } = require('@google-cloud/firestore');


const increaseuserpoiniffirest = async (email,poin)=>{
    const users = database.collection("users").doc(email)
    const currentgame = database.collection("current").doc(email)
    const increment = Firestore.FieldValue.increment(poin);
    let currentdata
    await currentgame.get().then((doc)=>{
        currentdata = doc.data()
    })
    const datastart = users.collection("riwayat").where('idgame','==',currentdata.idgame)
    let isThere = false
    await datastart.get().then((collection)=>{
        collection.forEach((doc)=>{
            if(doc.exists){
                isThere = true
            }
        })
    })
    if(!isThere){
        users.update({
            poin:increment
        })
    }
}

module.exports = increaseuserpoiniffirest