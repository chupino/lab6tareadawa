const express = require('express')
const app = express()
const data = require('./data/users.json')

app.set('views', './views');
app.use(express.static('./views'));
app.engine("ejs", require('ejs').renderFile);

app.get('/portafolio/:nombre',(req, res) => {
    let nombre = req.params.nombre
    if(nombre=="mauricio"){
        const user = data[0]
        res.render('portafolio.ejs', {user: user})
    }else{
        const user = data[1]
        res.render('portafolio.ejs', {user: user})
    }
    
})
app.get('/portafolio/:nombre/habilidades',(req, res) => {
    let nombre = req.params.nombre
    if(nombre=="mauricio"){
        const user = data[0]
        res.render('habilidades.ejs', {user: user})
    }else{
        const user = data[1]
        res.render('habilidades.ejs', {user: user})
    }
})
app.get('/portafolio/:nombre/contactame',(req, res) => {
    let nombre = req.params.nombre
    if(nombre=="mauricio"){
        const user = data[0]
        res.render('contactame.ejs', {user: user})
    }else{
        const user = data[1]
        res.render('contactame.ejs', {user: user})
    }
})
module.exports=app