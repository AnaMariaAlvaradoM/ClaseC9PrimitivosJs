// ! Variables 
// Las variables se declaran con:
// - var: Alcance de función (antiguo)
// - let: Alcance de bloque (puede cambiar)
// - const: Alcance de bloque (constante, no puede cambiar)
let numero = 19;
let num; 
num = 20;
let texto = "Ana"
let esFalso = false
let nulo = null;
let noDefinido;

console.log(numero);
console.log(num);
console.log(nulo);
console.log(texto);

console.log("Hello", texto);

operacion = number * 3;
console.log(operacion);

// === (igualdad estricta)
// Compara dos valores teniendo en cuenta su tipo.
// No realiza ninguna conversión. Ambos valores 
// deben ser del mismo tipo y tener el mismo 
// valor para que la comparación sea verdadera.

console.log(5 === "5");  // false (diferentes tipos: número vs string)
console.log(false === 0); // false (diferentes tipos: booleano vs número)
console.log(null === undefined); // false (diferentes tipos)
console.log(" " === 0); // false (string vs número)
console.log(5 === 5); // true (mismo valor y mismo tipo)

console.log(5 == "5");  // false (diferentes tipos: número vs string)
console.log(false == 0); // false (diferentes tipos: booleano vs número)
console.log(null == undefined); // false (diferentes tipos)
console.log(" " == 0); // false (string vs número)
console.log(5 == 5); // true (mismo valor y mismo tipo)

suma = 4 + "Hola";

suma = 4 + 4;

resta = 4 - "2";

console.log(resta);





