const database = require("../database/firebase")

const getgamedetailmodel = async (idgame)=>{
    let game = database.collection("game")
    let docgame = game.doc(idgame)
    let gamedata
    await docgame.get().then((doc)=>{
        gamedata = doc.data()
    })
    return gamedata
}

module.exports = getgamedetailmodel