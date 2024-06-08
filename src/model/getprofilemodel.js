const database = require("../database/firebase")

const getprofilemodel = async (email)=>{
    var users = database.collection("users");
    var dbemail = users.doc(email)
    var riwayat = dbemail.collection("riwayat")
    let leaderboard = 0
    var returnedData
    await users.orderBy('poin','desc').get().then((snapshot)=>{
        snapshot.forEach((doc)=>{
            leaderboard+=1
            if (doc.id===email){
                returnedData = doc.data();
                returnedData.riwayat=[]
                returnedData.leaderboard=leaderboard
            }
        })
    })
    await riwayat.get().then(collection =>{
        collection.forEach((doc)=>{
            returnedData.riwayat.push(doc.data())
        })
    })
    return returnedData
}

module.exports = getprofilemodel

