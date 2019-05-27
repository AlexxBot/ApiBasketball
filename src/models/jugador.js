const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jugadorSchema = new Schema({
    nickName: String,
    nroCamiseta: String,
    equipo: String, //por mientras como parametro
    persona : {
        type: Schema.Type.ObjectId,
        ref: "persona"   
    }
});

module.exports = mongoose.model('jugador', jugadorSchema);