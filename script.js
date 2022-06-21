//Lista de contactos Laura Moriones/

const contactlist = [
  { id: 1, name: "Geralding Moriones", number: 3124021228 },
  { id: 2, name: "Yesid Vargas", number: 3223060602 },
  { id: 3, name: "Daniela Mayorga", number: 3002316114 },
  { id: 4, name: "Diana Avila", number: 3123243164 },
  { id: 5, name: "Angie Suarez", number: 3212585010 },
  { id: 6, name: "Natalia Acero", number: 3227401539 },
  { id: 7, name: "Martha Cardona", number: 3006262243 },
  { id: 8, name: "Andres Catañeda", number: 3144341428 },
  { id: 9, name: "Luisa Maldonado", number: 3192837931 },
];

const newcontact = contactlist.push({
  id: 10,
  name: "Claudia Gonzales",
  number: 3054167392,
});

alert("Añadir mas datos");
contactlist.push({
  nombres: window.prompt(" Ingresar nombre"),
  apellido: window.prompt(" Ingresar Apellido "),
  telefono: window.prompt("Ingresar Numero de contacto"),
  Ubicacion: window.prompt("Ingresar Ciudad"),
  Localizacion: window.prompt("Ingresar Dirección"),
});

const deletecontact = contactlist.shift();

console.log(contactlist);

const moreinformation = contactlist.push({
  id: 11,
  nombres: "Alberto ",
  apellido: "Camargo",
  telefono: "3123446709",
  ubicación: { ciudad: "Cali", dirección: "Calle 49 b sur numero 10 c 47" },
});

console.log(contactlist[0]);

contactlist.splice(0, 1, {id: 2, name: "Jose Yesid Vargas", number: 3133398046});
