// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  const result = Object.entries(objeto);
  return result;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let upperLetter = "";
  let lowerLetter = "";
  for(let i = 0; i < s.length; i++){
    if(s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90 || s[i]=== 165){
      upperLetter += s[i]
    }else if(s[i].charCodeAt() >= 97 && s[i].charCodeAt()<= 122 || s[i]=== 164){
      lowerLetter += s[i];
    }
  }
  return upperLetter + lowerLetter;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let arr = str.split(" ")
  let result = [];
  for(let i = 0; i < arr.length; i++){
    let reverse = arr[i].split("").reverse().join("");
    result.push(reverse)
  }
return result.join(" ")
}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let str = numero.toString();
  let arr = str.split("").reverse().join("");
  if (numero == arr) return "Es capicua";
  return "No es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let word = "";

  for(let i = 0; i < cadena.length; i++){
    if(cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c" ){
      word += cadena[i];
    }
  }
  return word;

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let pivot = arr[0];
  let result = [];
  for(let i = 1; i < arr.length; i++){
    if(arr[i].length >= pivot.length){
      result.push(pivot);
      pivot = arr[i]
      
    }else{
      result.push(arr[i])
      pivot = arr[i];
    }
  }
  return result;
  
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let arr = [];
  for(let i = 0;  i < arreglo1.length; i++){
    if(arreglo2.includes(arreglo1[i])){
      arr.push(arreglo1[i]);
    }
  }
  return arr;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

