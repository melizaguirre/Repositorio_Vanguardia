var router = require('express').Router()
const estudiantesCtr = require("../controllers/estudiantes")
router.get('/', estudiantesCtr.getAllEstudiantes);
module.exports = router