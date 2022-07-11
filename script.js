//Lista de contactos Laura Moriones/

const contactlist = [
  { id: 1, name: "Geralding", apellido: "Moriones", number: 3124021228 },
  { id: 2, name: "Yesid", apellido: "Vargas", number: 3223060602 },
  { id: 3, name: "Daniela", apellido: "Mayorga", number: 3002316114 },
  { id: 4, name: "Diana", apellido: "Avila", number: 3123243164 },
  { id: 5, name: "Angie", apellido: "Suarez", number: 3212585010 },
  { id: 6, name: "Natalia", apellido: "Acero", number: 3227401539 },
  { id: 7, name: "Martha", apellido: "Cardona", number: 3006262243 },
  { id: 8, name: "Andres", apellido: "Catañeda", number: 3144341428 },
  { id: 9, name: "Luisa", apellido: "Maldonado", number: 3192837931 },
];

contactlist.push({
  id: 10,
  name: "Claudia",
  apellido: "Gonzales",
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

contactlist.push({
  id: 11,
  nombres: "Daniel Felipe",
  apellido: "Montoya",
  telefono: 3222457897,
  ubicación: { ciudad: "Bogotá", dirección: "Calle 9a c sur # 2bis-45" },
});

console.log(contactlist[0]);

contactlist.splice(0, 1, {
  id: 2,
  name: "Jose Yesid",
  apellido: "Vargas",
  number: 3133398046,
});

function SortMyContaclist(x, y) {
  if (x.apellido < y.apellido) {
    return -1;
  }
  if (x.apellido > y.apellido) {
    return 1;
  }
  return 0;
}

let myContactlistOrder = contactlist.sort(SortMyContaclist);
console.log(myContactlistOrder);
