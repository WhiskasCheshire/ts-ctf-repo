import express from 'express'
import bodyParser from 'body-parser'
const cors = require('cors')



export let makeServer = () => {
  const app = express()
  app.use(cors())
  app.use(bodyParser.json())
  app.get("/_test",(req,res)=>{
    res.send("It's Working!")
  })

  return app;
}
