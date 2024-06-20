const database = require("../database/firebase")

async function deleteDocumentAndSubcollections(docRef) {
    // Delete document
    await docRef.delete();
  
    // Recursively delete subcollections
    const collections = await docRef.listCollections();
    for (const collection of collections) {
      const querySnapshot = await collection.get();
      querySnapshot.forEach((doc) => {
        deleteDocumentAndSubcollections(doc.ref);
      });
    }
  }

const posttoriwayatfromcurrentanddeletemodel = async (email,poin)=>{
    let datacurrent
    const current = database.collection("current").doc(email)
    const userRiwayat = database.collection("users").doc(email).collection("riwayat")
    await current.get().then((doc)=>{
        datacurrent=doc.data()
    })
    let pertanyaan=[]
    await current.collection("pertanyaan").get().then(collection=>{
        collection.forEach((doc)=>{
            pertanyaan.push(doc.data())
        })
    })
    datacurrent.pertanyaan=null
    datacurrent.poinuser=Math.round(poin)
    await userRiwayat.doc(datacurrent.idusergame).set(datacurrent)
    pertanyaan.forEach((data)=>{
        userRiwayat.doc(datacurrent.idusergame).collection("pertanyaan").doc(data.idpertanyaan).set(data)
    })
    await deleteDocumentAndSubcollections(current)
}

module.exports = posttoriwayatfromcurrentanddeletemodel