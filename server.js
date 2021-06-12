const express = require('express')
const server = express();
const nunjucks = require('nunjucks');
const db = require('./db')

/*
const ideas = [
    { 
        img:"./images/music.svg",
        title:"Mobbers",
        category:"Música",
        description:" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
        url:"#"
    },
    {
        img:"./images/videogames.svg",
        title:"God Of War",
        category:"Video Game",
        description:"  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
        url:"#"
    },
    {
        img:"./images/calendar.svg",
        title:"Exercícios",
        category:"Saúde",
        description:"  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
        url:"#"
    },
    {
        img:"./images/calendar.svg",
        title:"Exercícios",
        category:"Saúde",
        description:"  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
        url:"#"
    }
    ,
    {
        img:"./images/videogames.svg",
        title:"God Of War",
        category:"Video Game",
        description:"  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
        url:"#"
    }
    ,
    {
        img:"./images/videogames.svg",
        title:"God Of War",
        category:"Video Game",
        description:"  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
        url:"#"
    }
]*/

//configurando arquivos estáticos (css, html, imagens)
server.use(express.static('public' ))
//habilitando req body
server.use(express.urlencoded({extended:true}))

//configurando nunjucks
nunjucks.configure("public/views", {express:server, noCache:true})


//index//////////////////////////////
server.get('/', function(req, res) {

    db.all(`SELECT * FROM ideas`, function(err, rows) {
        if (err) return console.log(err)

        const reverseIdea = [...rows].reverse()

        let lastidea = []
        for(let idea of reverseIdea) {
            if(lastidea.length < 2) {
                lastidea.push(idea)
            }
        }
         return res.render("index.html", {ideas:lastidea} )

    })



})


//ideas////////////////////////////////////
server.get('/ideias', function(req, res) {

    db.all(`SELECT *FROM ideas`, function(err, rows) {
        if (err) return console.log(err)

        const reverseIdea = [...rows].reverse()

        return res.render("ideias.html", {ideas: reverseIdea} )
    })



})


//inserir ideias
server.post('/', function(req, res) {


    const query = `
    INSERT INTO ideas ( 
        image, 
        title, 
        category, 
        description,
        link
        ) vALUES (?,?,?,?,?)
    `

    const values = [
        req.body.image,
        req.body.title, 
        req.body.category, 
        req.body.description,
        req.body.link
    ]
    
    db.run(query, values, function(err){
       if(err) return console.log(err)

        console.log(this)
    })



   res.redirect('/ideias')

})

server.listen('3000')

