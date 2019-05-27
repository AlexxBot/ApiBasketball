//const express = require('express');
const router = require('express-promise-router')();

const {
    index,
    newPersona,
    getPersona,
    replacePersona,
    updatePersona,
    deletePersona
} = require ('../controllers/persona');

router.get('/', index);
router.post('/', newPersona);

router.get('/:personaId', getPersona);
router.put('/:personaId', replacePersona);
router.patch('/:personaId', updatePersona);
router.delete('/:personaId', deletePersona);

module.exports = router;