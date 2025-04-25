function Persona(nombre, apellido, email = "sin correo") {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  this.isAdmin = false;

  this.nombreCompleto = function () {
    console.log(`Mi nombre es ${this.nombre} ${this.apellido}`);
  };
}

const persona1 = new Persona("Juan", "Perez", "juan@example.com", true);

const persona2 = new Persona("Maria", "Perez");
persona2.isAdmin = true;

// console.log(persona1, persona2);

persona1.nombreCompleto();
