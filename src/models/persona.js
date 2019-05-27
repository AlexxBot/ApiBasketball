const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personaSchema = new Schema({
    dni: String,
    nombre: String,
    apellido: String,
    direccion: String,
    telefono: String,
    email: String,
    fechaNacimiento: Date
});

module.exports = mongoose.model('persona', personaSchema);