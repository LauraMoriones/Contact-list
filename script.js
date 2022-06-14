//Lista de contactos Laura Moriones/

const contactos = [
  { id: 1, nombre: "Geralding Moriones", numero: 3124021228, tipo: "FM" },
  { id: 2, nombre: "Yesid Vargas", numero: 3223060602, tipo: "FM" },
  { id: 3, nombre: "Daniela Mayorga", numero: 3002316114, tipo: "EM" },
  { id: 4, nombre: "Diana Avila", numero: 3123243164, tipo: "FM" },
  { id: 5, nombre: "Angie Suarez", numero: 3212585010, tipo: "EM" },
  { id: 6, nombre: "Natalia Acero", numero: 3227401539, tipo: "EM" },
  { id: 7, nombre: "Martha Cardona", numero: 3006262243, tipo: "FM" },
  { id: 8, nombre: "Andres Catañeda", numero: 3144341428, tipo: "EM" },
  { id: 9, nombre: 3192837931, tipo: "EM" },
];
alert("Añadir nuevo contacto");
const nuevocontacto = (contactos.push = {
  id: window.prompt("Ingresar contacto"),
  nombre: window.prompt("Ingresar nombre"),
  numero: window.prompt("añadir numero"),
});

const eliminarcontacto = contactos.shift();
console.log(contactos);
