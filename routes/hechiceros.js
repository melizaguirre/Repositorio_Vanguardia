const router = require('express').Router();
const hechicerosCtrl = require('../controllers/hechiceros');

router.post('/', hechicerosCtrl.agregarHechicero);
router.put('/:id', hechicerosCtrl.actualizarHechicero);
router.delete('/:id', hechicerosCtrl.eliminarHechicero);
router.get('/', hechicerosCtrl.buscarTodosHechiceros);
router.get('/:id', hechicerosCtrl.buscarHechiceroPorId);

module.exports = router;
