const database =  require("../database/firebase")
const {v4:uuidv4} = require("uuid")

const postgamestartmodel = async(idgame,email)=>{
    const game = database.collection("game").doc(idgame)
    const current = database.collection("current")
    let gamedata
    let pertanyaan=[]
    await game.get().then((doc)=>{
        gamedata=doc.data()
    })
    await game.collection("pertanyaan").get().then(collection=>{
        collection.forEach((doc)=>{
            pertanyaan.push(doc.data())
        })
    })
    const uuid=uuidv4()
    gamedata.idusergame=uuid
    gamedata.pertanyaan=null
    current.doc(email).set(gamedata)
    pertanyaan.forEach(data=>{
        current.doc(email).collection("pertanyaan").doc(data.idpertanyaan).set(data)
    })
    gamedata.pertanyaan=pertanyaan
    return gamedata
}

module.exports = postgamestartmodel