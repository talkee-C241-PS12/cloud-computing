const database = require("../database/firebase")

const getkelasdetailmodel = async(idkelas)=>{
    let kelas = database.collection("kelas").doc(idkelas)
    let kelasdetail 
    await kelas.get().then((docs)=>{
        if(docs.exists){
            kelasdetail=docs.data()
            kelasdetail.data=[]
        }else{
            throw new Error("data don't exist")
        }
    })
    await kelas.collection("pertanyaan").get().then((docs)=>{
        docs.forEach((doc)=>{
            let data=doc.data()
            kelasdetail.data.push({
                kata:data["kata"],
                video:data["urlvideo"]
            })
        })
    })
    return kelasdetail
}

module.exports = getkelasdetailmodel

// game(collection)
// -game1(idgame,document)
// - - nama:string
// - - idgame:string
// - - image:string
// - - poin:int
// - - pertanyaan(collection)
// - - pertanyaan1(idpertanyaan,document)
// - - -idpertanyaan:string
// - - -jawaban:string
// - - -video:string
// - - -pertanyaan:string
// (untuk pertanyaan sesuaiin ama tipe pertanyaan penyimpenan pertanyaannya)
// - - pertanyaan2(idpertanyaan,document)
// - - -idpertanyaan:string
// - - -jawaban1:string
// - - -jawaban2:string
// - - -jawaban3:string
// - - -pertanyaan:string
