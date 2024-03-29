var express = require('express')
var { engine } = require('express-handlebars')
var op = express()
var bp = require('body-parser')

op.engine('handlebars', engine());
op.set('view engine', 'handlebars');
op.set('views', './views');
op.use(express.static('public'))
op.use(bp.urlencoded({ extended: false }))
op.use(bp.json())
var lanche = []
var estoque = []
var login = ""
var senha = ""
var confCadast = false
var confLogin
var userLogin
var userSenha

op.get('/', function (req, res) {
    res.render('login')
})
op.post('/', function (req, res) {
    login = req.body.login
    senha = req.body.senha
    res.render('login')
})
op.get('/usuario', function (req, res) {
    res.render('usuario')
})

op.post('/inicio', function (req, res) {
    msgErro = req.body.campoErro
    userLogin = req.body.login
    userSenha = req.body.senha
    if (login == userLogin && senha == userSenha) {
        confLogin = false
        res.render('validarLogin')

    } else {
        if (login == "" && senha == "") {
            confCadast = true
            res.render('login',{confCadast})
        } else {
            confLogin = true
            res.render('login', { confLogin })
        }
    }
})
op.get('/inicio', function (req, res) {
    res.render('inicio')
})

op.get('/lanche', function (req, res) {
    res.render('lanche', { lanche })
})
op.post('/lanche', function (req, res) {
    nome = req.body.nome
    preco = req.body.preco
    molho1 = req.body.molho1
    molho2 = req.body.molho2
    descricao = req.body.ingredientes

    cast = {
        "nome": nome,
        "preco": preco,
        "molho1": molho1,
        "molho2": molho2,
        "descricao": descricao
    }
    lanche.push(cast)

    res.render('concluido')
})
op.get('/estoque', function (req, res) {
    res.render('estoque', { estoque })
})
op.post('/estoque', function (req, res) {
    nome = req.body.nome
    tipo = req.body.tipo
    setor = req.body.setor
    descricao = req.body.descricao

    cast = {
        "nome": nome,
        "tipo": tipo,
        "setor": setor,
        "descricao": descricao
    }
    estoque.push(cast)
    res.render('concluido')
})
op.get('/cadastro', function (req, res) {
    res.render('cadastro')
})
op.get('/cadastro/estoque', function (req, res) {
    res.render('alterarEstoque')
})
op.get('/cadastro/lanche', function (req, res) {
    res.render('novoLanche')
})

op.listen(4090, function () {
    console.log('http://localhost:4090')
})
