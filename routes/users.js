var express = require('express');
var router = express.Router();
const usuariosController = require ('../controllers/usuariosController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/usuarios', usuariosController.usuarios);


module.exports = router;


