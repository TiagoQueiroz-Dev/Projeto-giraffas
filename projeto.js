var express = require('express')
var {engine} = require('express-handlebars')
var op = express()
var bp = require('body-parser')

op.engine('handlebars', engine());
op.set('view engine', 'handlebars');
op.set('views', './views');
op.use(express.static('public'))
op.use(bp.urlencoded({extended:false}))
op.use(bp.json())

op.get('/',function(req,res){
    res.render('inicio')
})
op.get('/cadastro',function(req,res){
    res.render('inicio')
})
op.get('/cadastro/estoque',function(req,res){
    res.render('inicio')
})
op.get('/cadastro/lanche',function(req,res){
    res.render('inicio')
})

op.listen(4090,function(){
    console.log('http://localhost:4090')
})
