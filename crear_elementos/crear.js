// crear un elemento HTML .createELement(nombre_etiqueta_html)
const elemento = document.createElement("section")
// Agregamos propiedaes a nuestro elemento
// no se pueden agregar propiedades bajo un objeto :'v
let clasesElemento = ["contenedor", "grid", "flex-content"]
elemento.classList.add(clasesElemento)
elemento.setAttribute("id", "centrar")

// Necesitamos un elemento padre de referencia para agregar el elemento
const main = document.getElementById("main")
/*  APPEND */
// append agrega el elemento al final de la lista de hijos del contenedor o padre
// append nos permite agregar contenido HTML así como nodos o elementos de texto

// el texto o nodo de texto javascript lo toma como DOMString, lo trata como un nodo, sin embargo no es elemento HTML

// con append podemos agregar más de un elemento a la vez al contenedor o padre append(img, h1, p, "texto")
main.append(elemento)

// prepend agrega el elemento al inicio de la lista de hijos del contenedor o padre
// prepend también funciona como append, alv y que rikolino
main.prepend(elemento)

// finalmente tenemos a appendChild que nos permite agregar solo agregar a adjuntar elementos HTML
// Los agrega al final de la lista de Hijos
main.appendChild(elemento)

// agregando un boton
let boton = document.createElement('button')
boton.setAttribute("class", "boton") 
boton.setAttribute("id", "boton")
main.append(boton)

// agregar texto al boton con appendChild
// porque appendChild solo recibe elementos del tipo HTML por ello requerimos de un DOMString para agregar texto al boton con appendChild
// para agregar un 
let btn = document.getElementById("boton")
let texto = document.createTextNode("click aqui")
btn.appendChild(texto)

// sin embargo con append() podemos agregar texto directamente sin la necesidad de crear un DOMString (HTML de texto)
texto = "Texto con Append"
boton.append(texto)

// creando varios elementos y agregandolos al DOM
let img, titulo, enlace
img = document.createElement("img")
titulo = document.createElement("h1")
enlace = document.createElement("a")
titulo.textContent = "Creado desde Js"
enlace.textContent = "Ir a"
// main es nuestro contenedor su definición esta más arriba
main.append(titulo, img, enlace, "hola Peter :v")


/**
 * Eliminar elementos
*/

// Al eliminar un contenedor o padre también se borran todos sus hijos
let eliminar = document.getElementById("eliminar")
// elimina el padre junto con todos sus hijos
eliminar.remove()

// en los argumentos de remove podemos especificar que elemento se va a borrar
// podemos recuperar una lista de los hijos con childNodes o children
console.log(main.children) 
main.removeChild(main.children[0]) // para borrar el primer elemento
// main.remove(main.chil)



