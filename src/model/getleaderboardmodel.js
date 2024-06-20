const database = require("../database/firebase")

const getleaderboardmodel = async()=>{
    const leaderboard = database.collection("users")
    const query_ref = leaderboard.orderBy("poin","desc").limit(10)
    let leaderboardcount=0
    let data = []
    await query_ref.get().then((collection)=>{
        collection.forEach((doc)=>{
            leaderboardcount+=1
            let docdata=doc.data()
            docdata["leaderboard"]=leaderboardcount
            data.push(docdata)
            
        })
    })
    return data
}

module.exports=getleaderboardmodel