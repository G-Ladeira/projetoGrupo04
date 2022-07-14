var express = require('express');
var router = express.Router();
const homeController = require('../controllers/homeController');
const sobreNosController = require('../controllers/sobreNosController');
const joiasController = require('../controllers/joiasController');
//IMPORTAR O CONTROLLER AQUI\\


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/home',homeController.home);
router.get('/sobreNos',sobreNosController.sobreNos);
router.get('/joias',joiasController.joias);


// POR AS ROTAS DAQUI PRA BAIXO\\

module.exports = router;
