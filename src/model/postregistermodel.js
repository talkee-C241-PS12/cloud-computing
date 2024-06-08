const database = require("../database/firebase")
const bucket = require("../database/bucket")

const postregistermodel = async (image,nama,email) => {
    const user =database.collection("users")
    const filepath = `user/profilepic/${email}.jpeg`
    const bucketfile = bucket.bucket(process.env.BUCKET).file(filepath)
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
        let flag
        await user.doc(email).get().then(
            (docsnap)=>{
                if (docsnap.exists) {
                    flag=true
                } else {
                    flag=false
                }
            }
        )
        if(!flag){
            return user.doc(email).set(
                {
                    email:email,
                    nama:nama,
                    image:`https://storage.googleapis.com/${process.env.BUCKET}/${filepath}`,
                    poin:0
                }
            )
        }else{
            throw new Error("existing data")
        }
    })
  
}

module.exports = postregistermodel