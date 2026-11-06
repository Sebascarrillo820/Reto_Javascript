// Reto: Perfil de usuario
// Conceptos: objetos, desestructuración anidada, métodos y this.

const usuario = {
    nombre: "María",
    apellido: "Gómez",
    edad: 25,

    direccion: {
        calle: "Calle 123",
        ciudad: "Bogotá",
        pais: "Colombia"
    },

    presentarse: function () {
        const {
            direccion: { ciudad, pais }
        } = this;

        return `Hola, soy ${this.nombre} ${this.apellido}, tengo ${this.edad} años y vivo en ${ciudad}, ${pais}.`;
    }
};

// Invocar el método y mostrar el resultado en consola.
console.log(usuario.presentarse());
