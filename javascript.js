class Usuario {
    
    constructor(nombre,apellido,libros, mascotas){
        this.nombre= nombre,
        this.apellido= apellido,
        this.libros= libros,
        this.mascotas = mascotas
    }

    getFullName(){
       console.log(`El usuario se llama ${this.nombre} ${this.apellido}`) 
    }
    addMascota(){
        return this.mascotas.push("loro");
        
    }
    countMascota(){
        console.log(`la cantidad de Mascotas que tiene ${this.nombre} ${this.apellido} son ` + this.mascotas.length )
    }
    addBook(){
        return this.libros.push({nombre:"Pipi",autor:"Petete"})
    }
    getBookNames(){
        let nombreLibros = this.libros.map(name => name.nombre)
        console.log(`Los nombres de los libros son `+ nombreLibros )
    }
}

const Usuario1 = new Usuario(
"Nahuel",
 "Lell", 
 [{nombre:"Señor de los cerditos",
  autor: "Mengeche"  
 },
 {nombre: "Pepe Sapo",
 autor:"Mengeche 2.0"
 }],
 ["perro","gato"])

 console.log(Usuario1)
 Usuario1.getFullName()
 Usuario1.addMascota()
 Usuario1.countMascota()
 Usuario1.addBook()
 Usuario1.getBookNames()
