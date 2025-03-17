const express = require('express');
const router = express.Router();
const gremiosController = require('../controllers/gremios');

router.post('/addGremio', gremiosController.agregarGremio);
router.put('/updateGremio', gremiosController.actualizarGremio);
router.delete('/deleteGremio', gremiosController.eliminarGremio);
router.get('/getGremio', gremiosController.obtenerGremios);
router.post('/:id/miembros', gremiosController.agregarMiembro);

module.exports = router;
