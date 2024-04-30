// Objetos

// Declaración

const Coche = {
    marca: '',
    modelo: '',
    matricula: '',
}


const Casa = {
    codPostal: '',
    calle: '',
    portal: '',
    piso: '',
}


const FullStackDeveloper = {
    lenguajes: [],
    proyectos: [],
}


const Perro = {
    nombre: '',
    raza: '',
    color: '',
    edad: '',
    ladrar: false,
    ladrar: function () {
        if (this.ladrar === true) {
        console.log('guau guau')
        } else {
        this.ladrar = true
        console.log('grrrrrr')
        }
    },
    popo: function(){
       return  Math.random() * 3
    }    
}

// Lectura de propiedades

let marcaPortatil = Portatil.marca
console.log(marcaPortatil)


let marcaPortatil2 = Portatil['marca']
console.log(marcaPortatil2)


let grupos = Concierto['grupos']
console.log(grupos)


let RGB = [Led.rojo, Led.verde, Led.azul]
console.log(RGB)

// Modificación de propiedades


Portatil.modelo = 'P345'


Concierto.cartelera.push ("Guns N' Roses")


Concierto.fecha = new Date()

const Imprimiendo = {
    nombreArchivo: '',
    copias: '',
    numPaginas: '',
}
Impresora.imprimiendo = Imprimiendo 


// Iteraciones

// Declaración

const Noticia = {
    titular: '',
    cuerpo: '',
}


const Persona = {
    nombre: '',
    apellidos:'',
    edad:'',
}


const Avion = {
    numPasajeros:'',
    despegar: function (){
        console.log('despegando')
    },
    volar: function (){
        console.log('llegando al destino')
    },
    aterrizar: function (){
        console.log('aterrizando')
    },
}


const Paquete = {
contenido:[],
}


const Pais = {
    numHabitantes:'',
    continente:'',
    gentilicio:'',
}


// Lectura de propiedades


let codError = O_Error.codigo
console.log(codError)


let integrantes = Grupo['integrantes']
console.log(integrantes)


let nivelesTinta = Impresora.tinta
console.log(nivelesTinta)


let pixeles = Pantalla.pixeles
console.log(pixeles)


let especificaciones = Movil['especificaciones']
console.log(especificaciones)


// Modificación de propiedades


Grupo.numIntegrantes = 5


Pantalla.dimensiones = '1920x1080'


Led.encendido = false


Movil.temperatura = '20º'










