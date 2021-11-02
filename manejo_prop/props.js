// una manerea de cambiar las propiedades en mediante
// setAttribute("width", "200") => cambia el ancho a 200

// Hay que ser sensato en el uso de los atributos

// 1ro hay que selecionar lo que queremos cambiar
imagen = document.querySelector(".imagen")
imagen.setAttribute("width", "10")
// otra forma de cambiar los tamaños es
imagen.width = "100";
imagen.height = "250";
console.log("Código ejecutandose")

// para obtener el valor de una propiedad
// Utilizanos getAttribute("nombre_imagen")

let prop = imagen.getAttribute("width")
prop = imagen.getAttribute("height")
console.log(prop)

const boton = document.getElementById("boton")
// obtener el texto de un boton y tal vez otro elemento con textContent
console.log(boton.textContent)

boton.textContent = "Cambiadito te veo"

const foto = document.querySelector(".foto")
let propFoto = foto.width
console.log(propFoto)

propFoto = foto.height
console.log(propFoto)

// imprimir las propiedades en una tabla
console.table([
    {
        nombre: "Ancho",
        prop:foto.width,
        tipo: typeof foto.width    
    },
    {
        nombre: "Alto",
        prop: foto.getAttribute('height'),
        tipo: typeof foto.getAttribute('height')
    }
])

// getAttribute retorna el valor de la propiedad como una cadena
// mientrar que obtener directamente la propiedad, por ejemplo: 

// foto.height => retorna el valor en formato númerico

// Por lo tanto para aplicar un width 100% utilizamos getAttribute para que reconozca la propiedad
foto.setAttribute("width", "100%")

// TRABAJANDO CON EL BOTON
// Agregando una clase al boton
let btnCalcular = document.getElementById("calcular")
btnCalcular.setAttribute("class", "primario")

// la otra forma de hacer eso es ..
// tambien se le puede pasar un arreglo con todos los valores
clases = ["haha", "cocinar","javascript"]
btnCalcular.classList.add(clases)

// Modificar los estilos con Javascript
// también se le puede agregar colores en formato hexadecimal
// Este tipo de propiedades estan dentro del objeto style al momento de imprimir algunos de los estilos
btnCalcular.style.backgroundColor = "#F4F1BB";

// Modificar clases de un elemento con classList
// 1 obtener elemento
let cClases = document.getElementById("clases")
// para agregar una clase
cClases.classList.add("hello")
cClases.classList.add("animals")
// para eliminar una clase
cClases.classList.remove("hello") // aun no borramos ninguna

// para reemplazar una de las clases
cClases.classList.replace("animals", "reemplazante")
// toggle que permite intercambiar estados de una clase
// si no existe lo agrega, si existe lo quita
// como existia la clase clases, la elimino
cClases.classList.toggle("clases")

// verificar la existencia de una clase 
// regresa true si la clase existe, false si no existe
cClases.classList.add("hello")
let verificar = cClases.classList.contains("hello")
console.log(verificar)

console.log(cClases.classList)

