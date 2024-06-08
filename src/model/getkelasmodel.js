const database = require("../database/firebase")

const getkelasmodel = async()=>{
    let kelas = database.collection("kelas")
    let listofcollection = []
    await kelas.get().then((docs)=>{
        docs.forEach((doc)=>{
            listofcollection.push(doc.data())
        })
    })
    return listofcollection
}

module.exports = getkelasmodel