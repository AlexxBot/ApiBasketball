const Persona = require('../models/persona');
module.exports = {
    index: async (req, res, next)  => {
        const personas = await Persona.find({});
        res.status(200).json(personas);
    },
    newPersona: async (req, res, next) =>{
        const newPersona = new Persona(req.body);
        const persona = await newPersona.save();
        res.status(200).json(persona);
    },
    getPersona:async (req, res, next) => {
        const { personaId } = req.params;
        const persona = await Persona.findById(personaId);
        res.status(200).json(persona);
    },
    //put
    replacePersona: async (req, res, next) => {
        const { personaId } = req.params;
        const newPersona = req.body;
        const oldPersona = await Persona.findByIdAndUpdate(personaId, newPersona);
        res.status(200).json({ succes:true });
    },
    //patch
    updatePersona: async (req, res, next) => {
        const { personaId } = req.params;
        const newPersona = req.body;
        const oldPersona= await Persona.findByIdAndUpdate(personaId, newPersona);
        res.status(200).json({ succes:true });
    },

    deletePersona: async (req, res, next) => {
        const { personaId } = req.params;
        const oldPersona = await Persona.findByIdAndDelete(personaId);
        res.status(200).json({ succes:true });
    }



};