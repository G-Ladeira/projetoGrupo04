var express = require('express');
var router = express.Router();
const homeController = require('../controllers/homeController')
const sobreNosController = require('../controllers/sobreNosController')
const carrinhoControllers = require('../controllers/carrinhoController')
//IMPORTAR O CONTROLLER AQUI\\


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bem vindo!' });
});

// POR AS ROTAS DAQUI PRA BAIXO\\
router.get('/home',homeController.home)
router.get('/sobreNos',sobreNosController.sobreNos)
router.get('/carrinho', carrinhoControllers.carrinho);

module.exports = router;
