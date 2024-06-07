const {OAuth2Client} = require('google-auth-library');
const { isNull } = require('util');
const client = new OAuth2Client();
async function verify(token) {
  const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const payload = ticket.getPayload();
  return payload
  // If the request specified a Google Workspace domain:
  // const domain = payload['hd'];
}

const verifymiddleware = async (req,res,next) => {
    const method =req.method
    let token
    switch(method){
        case "GET":
            token=req.query.token
        break;
        case "POST":
            token=req.header["token"]
        break;
        default:
            const error = new Error("no register method")
            error.status = 403;
            next(error)
            return;
        break;
    }
    if (token == undefined){
        const error = new Error("no token on auth")
        error.status = 403;
        next(error)
        return
    }
    let data = await verify(token).catch(
        (err)=>{
            next(err)
        }
    )
    req.datapayload=data
    next()
}

module.exports = verifymiddleware