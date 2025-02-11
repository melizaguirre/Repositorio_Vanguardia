const mongoose = require('mongoose');

const HechiceroSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  nivel: { type: Number, required: true, min: 1, max: 10 },
  especialidad: { type: String, required: true },
  gremio: { type: mongoose.Schema.Types.ObjectId, ref: 'Gremio' }
}, { timestamps: true });

module.exports = mongoose.model('Hechicero', HechiceroSchema);
