const express =  require('express')
const Router = express.Router();

Router.get('/',(req,res)=>{
    res.send('hi i am running lol')
})

module.exports = Router;