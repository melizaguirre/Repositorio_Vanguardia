const mongoose = require('mongoose');

const GremioSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  nombre: { type: String, required: true, unique: true },
  casas: [{ type: String }], // Lista de casas dentro del gremio
  cantidad: { type: Number, required: true }, // Cantidad de miembros
  status: { type: String, enum: ['activo', 'inactivo'], required: true },
  miembros: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Estudiante' }] // Relación con estudiantes
}, { timestamps: true });

module.exports = mongoose.model('Gremio', GremioSchema);
