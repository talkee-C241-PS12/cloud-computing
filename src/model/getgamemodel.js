const database = require("../database/firebase")

const getgamemodel = async ()=>{
    let listcollection = []
    let game = database.collection("game")
    await game.get().then((collection)=>{
        collection.forEach((doc)=>{
            listcollection.push(doc.data())
        })
    })
    return listcollection
}

module.exports = getgamemodel
