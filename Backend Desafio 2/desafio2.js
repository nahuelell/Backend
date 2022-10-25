const fs = require('fs');

class Contenedor {
    #elementos
    #file
    constructor(road) {
        this.#elementos = [];
        this.#file = road;
    }

    async save(titulo, precio, id) {
        const objeto = {
            titulo: titulo,
            precio: precio,
            id: id
        };
        try {
            if (this.#elementos.length === 0) {
                objeto.id = 1;
                this.#elementos.push(objeto)

            } else {
                objeto.id = this.#elementos[this.#elementos.length - 1].id + 1;
                this.#elementos.push(objeto);
            }
            await fs.promises.writeFile(this.#file, JSON.stringify(this.#elementos, null, `\t`));
        } catch (error) {
            console.log(error)
        }
        return objeto.id;
    }
    async getById(id) {
        try {
            const resultado = await fs.promises.readFile(this.#file, 'utf-8');
            const array = JSON.parse(resultado);
            if (array.length > 0) {
                const buscar = array.find(element => element.id === id)
                if (!buscar) {
                    throw new Error(`elemento con id ${id} no encontrado`)
                } else {
                    return buscar
                }
            }
        }
        catch (error) {
            throw new Error(`elemento con id ${id} no encontrado`)
        }
    }
    async getAll() {
        try {
            const resultado = await fs.promises.readFile(this.#file, 'utf-8');
            const array = JSON.parse(resultado);
            console.log(array)
        } catch (error) {
            throw new Error(error)
        }
    }
    async deleteById(id) {
        try {
            const resultado = await fs.promises.readFile(this.#file, 'utf-8');
            const array = JSON.parse(resultado);
            if (array.find(element => element.id === id)) {
                const arr = array.filter(element => element.id !== id);
                console.log(arr)
                await fs.promises.writeFile(this.#file, JSON.stringify(arr));
            } else {
                console.log(`No se puede eliminar ya que no existe tal ID`)
            }
        } catch (error) {
            console.log(error)
        }
    }
}
async function test() {
    const elements = new Contenedor('./elementos.txt');

    await elements.save('Alfombra', 1200, '0001');
    await elements.save('Cortina', 1700, '0002');
    await elements.save('Mantel', 2000, '0003');
    const id = await elements.save('Repasador', 1500, '0004')
    console.log(id)
    const eleme = await elements.getById(2);
    console.log(eleme)
    await elements.deleteById(1);
    const elemes = await elements.getAll();
    console.log(elemes)
}

test()