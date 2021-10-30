'use strict'

function errorHandler(error){
    console.error(error);
    throw new Error('Falla en la operacion del servidor')
}

module.exports = errorHandler