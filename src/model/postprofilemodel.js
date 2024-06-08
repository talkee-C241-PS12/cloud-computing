const database = require("../database/firebase")
const bucket = require("../database/bucket")

const postprofilemodel = async (email,nama,image)=>{
    let user = database.collection("users")
    let refdata = user.doc(email)
    let pastdata
    const filepath = `user/profilepic/${email}.jpeg`
    const bucketfile = bucket.bucket(process.env.BUCKET).file(filepath)
    await refdata.get().then((doc)=>{
        if (doc.exists){
            pastdata = doc.data()
        }else{
            throw new Error("account don't exist")
        }
    })
    if(nama==undefined){
        nama=pastdata.nama
    }
    if(image!=undefined){
        const stream = bucketfile.createWriteStream(
            {
                destination:filepath,
                metadata : {
                    contentType: image.mimetype
                }
            }
        )
        stream.end(image.buffer)
        stream.on('finish', async ()=>{
            return user.doc(email).set(
                {
                    email:email,
                    nama:nama,
                    image:`https://storage.googleapis.com/${process.env.BUCKET}/${filepath}`,
                    poin:pastdata.poin
                }
            )
        })
    }else{
        return user.doc(email).set(
            {
                email:email,
                nama:nama,
                image:pastdata.image,
                poin:pastdata.poin
            }
        )
    }
}

module.exports = postprofilemodel