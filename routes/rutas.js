
const { Router } = require('express')

const rutas = Router()

const { nombreCliente,
        apellidoCliente,
        telefonoCliente,
        fechaInicioReserva,
        fechaFinReserva } = require ('..')


module.exports = rutas