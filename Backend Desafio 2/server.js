const { conectar } = require("./desafio2.js")

async function main() {
    try {
        const serv = await conectar(8080)
        console.log(`conectado al puerto ${serv.address().port}`)
    }
    catch (error) {
        console.log('Algo fallo: ' + error)
    }
}

main()