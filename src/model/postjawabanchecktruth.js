const database = require("../database/firebase")

const postjawabanchecktruth = async (email) => {
    const current = database.collection("current").doc(email)
    let flag = true
    let lenght = 0
    let right = 0
    let docdata
    await current.get().then((doc)=>{
        if (doc.exists){
            docdata=doc.data()
        }else{
            throw Error("unavailable data")
        }
    })
    await current.collection("pertanyaan").get().then(collection=>{
        collection.forEach((doc)=>{
            let data = doc.data()
            lenght+=1
            if (data.jawabanuser==undefined){
                flag = false
            }else{
                if(data.jawabanuser==data.jawaban){
                    right+=1
                }
            }
        })
    })
    return {
        "process" : flag,
        "poin" : (docdata.poin*right)/lenght 
    }
}

module.exports = postjawabanchecktruth