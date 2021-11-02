document.addEventListener('DOMContentLoaded', () => {
    console.log("El documento esta listo para ejecutar código JS")
})



// Probando las diferentes configuraciones de los elementos

const logo = document.getElementById("logo")

// Selecciona solo un elemento mediante un selector CSS
const logo2 = document.querySelector(".logo")

console.log(logo)
console.log(logo2)

const item = document.getElementsByClassName('item')
// Este retorna un HTMLCollection (retorna los datos en un objeto)
console.log(item)


// Un NODO es todo contenido ya sea una etiqueta html o no y se considera
const item2 = document.querySelectorAll('.item')
// este retorna una NodeList (retorna los valores en un array)

console.log(item2)

// Validar que ese sea un arreglo
/*
    Para validar si es un arreglo utilizamos la clase estatica Array y hacemos uso del método estatico  isArray(elemento_a_verificar_si_es_array)
*/
console.log( Array.isArray(item), Array.isArray(item2) )


// Verificar que una lista es un iterador
// ambos interactuan como iteradores
// para verficar que ambos son iteradores utilizamos

console.log(Reflect.has(item, Symbol.iterator))
console.log(Reflect.has(item2, Symbol.iterator))

// Verificar si se esta litas de asdelementos tipo iterador se puede recorrer con foreach

// item es del tipo HTMLCollection por tanto este no se puede recorrer con un ciclo foreach
console.log("Recorrer un HTMLCollections con un forEach")
console.log(Reflect.has(item, 'forEach'))

// Item2 es del tipo NodeList y el resultado nos muestra que este si se puede recorrer con un forEach
console.log("Recorrer un NodeList con un forEach")
console.log(Reflect.has(item2, 'forEach'))

// Verificando los resultados, con item2 (nodelist) si se pueden recorrer los elementos
console.log("Recorriendo el NodeList")
item2.forEach( x => {
    console.log(x)
})

// para recorrer un HTMLCollections podemos hacer uso de un bucle for como el siguiente:
console.log("Recorrido el HTMLCollections")
for(elemento of item){
    console.log(elemento)
}

console.log("Recorriendo el NodeList con for")
// tambien puede funcionar para item2
for(elemento of item2){
    console.log(elemento)
}

// getElementsByTagName también retorna una HTMLCollections
links = document.getElementsByTagName('a')


// Empezando con la navegacion en el DOM
// querySelector nos retorna solo un valor y este es el que encuentre primero la lista de nodos o DOM 
console.log(" Navegando en el documento con JS ")
const header = document.querySelector('header')

// La propiedad children nos retorna un HTMLCollecions
let hijosHeader = header.children
console.log(hijosHeader)

// La propiedad children nos retorna un NodeList
hijosHeader = header.childNodes
console.log(hijosHeader)
// NodeList interpreta los saltos de linea como un nodo y también los cuenta en la lista de elementos a retornar

// Para trabajar nos nos conviene tanto utilizar los childNodes, porque no queremos que nos retornen los saltos de linea como texto

// Navegar directamente en los nos del DOM de HTML 
// parentElemento nos retorna el padre del elemento (su contenedor, el que lo encierra entre sus etiquetas)
console.log('Padre con parentElement', logo.parentElement)
console.log('Padre con parentNode', logo.parentNode)

console.log('Obtener el padre de un elemento y mostrar todos sus hijos')

console.log('obtener padre y mostrar hijos', logo.parentElement.children)

console.log('hermanos de un elemento con JS')
// Obtiene el elemento del mismo que este despues del elemento al cual se esta aplicando Sibling
console.log('hermano siguiente al elemento', logo.nextElementSibling)


