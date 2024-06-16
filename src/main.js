const express = require("express")
const cors = require("cors")
const initilizeRoute = require("./route/route")

require('dotenv').config();

//intilize app
const app = express()

initilizeRoute(app)

app.use(cors())
app.set("query parser","simple")



app.use((err,req,res,next)=>{
    res.status(err.status || 500).send(err.message || 'Internal Server Error');
})
app.listen(process.env.PORT,'localhost',()=>{
    console.log("started")
})