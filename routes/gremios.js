const express = require('express');
const router = express.Router();
const gremiosController = require('../controllers/gremios');

router.post('/', gremiosController.agregarGremio);
router.put('/:id', gremiosController.actualizarGremio);
router.delete('/:id', gremiosController.eliminarGremio);
router.get('/', gremiosController.obtenerGremios);
router.post('/:id/miembros', gremiosController.agregarMiembro);

module.exports = router;
