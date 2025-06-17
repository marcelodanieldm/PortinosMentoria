
//
/*
linea1
linea 2
*/


 //variables

//let var1= 'marcelo';
//let var2= 3;
//let var3 = true 
//const pi= 3.14;
//const mes1='enero';
//console.log(var1)
//Datos primitivos
//String 
//Integer
//boolean
//Null ausencia de valor.
//Undefined indica que la variable no ha sido asignada con un valor


//operadores aritmeticos

//let suma = 10+10;
//console.log(suma)
//let resta = 10-10
//console.log(resta)
//let mul=10*10
//let div=10/10
//let mod = 10%3; //modulo es el resto/residuo de la division
//console.log(mod)

//oeradores de asignacion

//let contador= 0;
//contador =+

//Operadores de comparacion

// == igualdad no estricta. Compara solamente el valor.
// ==== igualdad estricta. Compara valor y tipo.
//let a = 1;
//let b= '1';
//a == b
//a === b

// != desigualdad no estrica.
//!== desigualdad estrica.
//let y = 6;
//let x = '6';
//console.log(y!= x )
//console.log(y !== x)

//operadores logicos
/*
&& AND, OR, ! NOT niega la condicion.
*/

//estructura de control
//if...else
//let edad = 17;
//if(edad >=18){
  //console.log('sos mayor de edad')
//}else{
  //console.log('sos menor de edad')
//}

//-------------------------------------------------

//bucle for.
//for(let i= 0; i<5; i++){
 // console.log('iteracion', i)
//}

//do...while se ejecuta al menos una vez

//funcion: es un bloque de codigo reutilizable.

//function edad(edad){
 // console.log('tu edad es: '+ edad);
//}

//edad(9)

//function saludar(nombre){
  //
  // console.log('hola '+ nombre +'!');

//}

//saludar('Tori');

//function sumar(a, b){
  
  //return a+b;
//}

//let resultado = sumar(1, 2)
//console.log(resultado);

//funciones anonimas

//const multiplicar = function(a, b){
  //return a*b;
//};

//let resultado = multiplicar(5, 4)
//console.log('el resultado es ' + resultado )

//funcion flecha
//const dividir = (a,b)=> a/b;
//let cociente= dividir(10,2);
//console.log('el resultado de la division es '+ cociente)


  
//estructura de funcion flecha o arrow function variable = (argumento, argumento)=> lo que hace la funcion;

//Objetos 

//const usuario = {

  //nombre: 'Carlos',
  //edad: 30,
  //direccion:'Calle 13',
  //saludar: function(){
    //console.log('hola')
  //}
//}

//Arrays
const frutas= ['pomelo', 'manzana', 'sandia', 'pera']
console.log(frutas.length)
console.log(frutas[0])

//----------------------------------Objetos-------------------------------------------------

const usuario = {
  nombre: "Carlos",
  edad: 30,
  email: "carlos@ejemplo.com",
  saludar: function() {
    console.log("¡Hola, soy " + this.nombre + "!");
  }
};

console.log(usuario.nombre); // Acceder a una propiedad
usuario.saludar();          // Llamar a un método (función dentro de un objeto)

// También puedes acceder a las propiedades así:
console.log(usuario["edad"]);

//--------------------------------------Metodos de arrays--------------------------------------------------

const numeros = [1, 2, 3, 4, 5];

numeros.forEach(numero => console.log(numero * 2)); // Imprime 2, 4, 6, 8, 10

const dobles = numeros.map(numero => numero * 2);
console.log("Dobles:", dobles); // Dobles: [2, 4, 6, 8, 10]

const pares = numeros.filter(numero => numero % 2 === 0);
console.log("Pares:", pares); // Pares: [2, 4]

const encontrado = numeros.find(numero => numero > 3);
console.log("Encontrado:", encontrado); // Encontrado: 4

const indiceEncontrado = numeros.findIndex(numero => numero < 2);
console.log("Índice encontrado:", indiceEncontrado); // Índice encontrado: 0

const incluyeTres = numeros.includes(3);
console.log("¿Incluye 3?:", incluyeTres); // ¿Incluye 3?: true

//-------------------------------------------Promesas y asincronia---------------------------------------------------

//---------------------------------- Programacion Orientada a Objetos (POO)------------------------------------------

//---------------------Mocha y Chai-----------------------------------------------------------------------------------


