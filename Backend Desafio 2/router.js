const express = require('express')

const servidor = express()

servidor.get('/saludo', (peticion, respuesta) => {

    respuesta.send('Holis')
})
servidor.get('/despedida', (peticion, respuesta) => {

    respuesta.send('Chau')
})

function conectar(puerto) {
    return new Promise((resolve, reject) => {
        const servidorConectador = servidor.listen(puerto, (err, result) => {
            if (err) reject(err)
            else resolve(servidorConectador)
        })
    })
}
module.exports = { conectar }