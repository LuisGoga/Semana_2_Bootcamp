

/*       //Ejercicio_Condicionales_01

       // Escribe un programa que pida dos números y que muestre la suma,
        //la resta, la multiplicación, la media, el más grande y el más pequeño.

        let numero1 =parseInt(window.prompt('Ingresa el primer número de la operación:'));
        

        let numero2 =parseInt(window.prompt('Ingrese el segundo número de la operación:'));
        
       

         let suma = numero1 + numero2;

         document.write('El total de la suma es: ', + suma);
         console.log(suma)
         

         let resta = numero1 - numero2;
         document.write('El total de la resta es: ', + resta);
         console.log(resta)
        

         let multiplicacion = numero1 * numero2;
         document.write('El total de la multiplicación es: ', + multiplicacion);
         console.log(multiplicacion)
         

         let media = (numero1 + numero2) % 2;
         document.write('la media resultante es: ', + media);
         console.log(media)

        if(numero1 < numero2)
        {
        alert(+numero2+ " Es el mayor");

              
       }else { 

       alert(+numero1+ " Es el mayor");

   }

   //Pide por teclado la edad del usuario.
   //Si la edad es igual o inferior a 8 mostramos el mensaje "Pasa al tobogán",
   //si no mostramos "Eres demasiado mayor para usar el tobogan.

   let edad =parseInt(window.prompt('Ingresa tu edad:'));
        

   if(edad <= 8)
   {
   alert("Pasa al tobogán");

         
  }else { 

  alert("Eres demasiado mayor para usar el tobogan");

        
  }

  

 //Escribe un programa que pida al usuario 3 números.
 //Si el resultado de la suma de los dos primeros es igual al tercer número,
 //mostrarlo en pantalla, si no mostrar que el tercero no es la suma de los dos anteriores.

let numero1 =parseInt(window.prompt('Ingresa el primer número de la operación:'));
        

let numero2 =parseInt(window.prompt('Ingrese el segundo número de la operación:'));


let numero3 =parseInt(window.prompt('Ingrese el tercer número de la operación:'));
        
       

let suma = numero1 + numero2;


if(suma = numero3)
{
alert("La suma del primero y del segundo número es igual al tercer número");

      
}else { 

alert("El tercer número no es la suma de los dos anteriores");

     
}



//Escribe un programa que pida al usuario tres números y que diga si la diferencia
//entre uno de ellos es exactamente 20 menos que uno de los otros. Por ejemplo,
//si el usuario introduce 20, 40 y 55, el programa dirá que el primer número es 20 menos que el segundo.

let numero1 =parseInt(window.prompt('Ingresa el primer número de la operación:'));
        

let numero2 =parseInt(window.prompt('Ingrese el segundo número de la operación:'));


let numero3 =parseInt(window.prompt('Ingrese el tercer número de la operación:'));

if(numero1 = numero3)
{
alert("La suma del primero y del segundo número es igual al tercer número");

      
}else { 

alert("El tercer número no es la suma de los dos anteriores");

     
}

  

//Pide al usuario que escriba un día de la semana (lunes, martes…).
//Mostrar en pantalla el día que dice que es si es entre lunes y viernes 
//(Por ejemplo "Hoy es lunes") y si es fin de semana mostrar "Es fin de semana".
//Hazlo una vez usando switch y otra con if else.



let dia =parseInt(window.prompt("Escribe un día de la semana:"));



switch(dia){
    case lunes:
        window.alert('Hoy es lunes')
        break;

        case martes:
            window.alert('Hoy es martes')
            break;

            case miercoles:
                window.alert('Hoy es miércoles')
                break;

                case jueves:
                    window.alert('Hoy es jueves')
                    break;

                    case viernes:
                        window.alert('Hoy es viernes')
                        break;

}

                       else {
                       window.alert("Es fin de semana");
  
                      }

if(dia == lunes) {

    window.alert("Hoy es lunes");
  
  }else if (diaSemana == martes){
  
    window.alert("Hoy es martes");

  }else if (diaSemana == miercoles){
    window.alert("Hoy es miércoles");
  
  }else if (diaSemana == jueves){
    window.alert("Hoy es jueves");

  }else if (diaSemana == viernes){
    window.alert("Hoy es viernes");
  
  }else {
    window.alert("Es fin de semana");
  
  }
  



//Escribe un programa que pida un número y muestre ese número al cuadrado
//y al cubo (multiplicado por sí mismo dos y tres veces).
//Si el número es menor que 1, no calcules el cubo ni el cuadrado.

let num =parseInt(window.prompt("Escribe un número:"));


let cuadrado= num * num;
let cubo= num * num *num;

if (num > 1)
{
    window.alert('El cuadrado del número introducido es:' + cuadrado);
    window.alert('El cubo del número introducido es:' + cubo);

      
}else { 

alert("El número es menor que 1");

     
}



//Tenemos dos números, un numerador y un denominador.
//Si el denominador no es cero, mostramos el resultado de dividir el numerador por el denominador.
//Si el denominador es cero, mostramos el mensaje "No se puede dividir por cero".


let numerador =parseInt(window.prompt("Ingresa un numerador:"));

let denominador =parseInt(window.prompt("Ingresa un denominador:"));


let division = numerador / denominador;


if (denominador != 0)
{
    window.alert('El resultado de la división es:' + division);
          
}else if (denominador == 0){

window.alert('No se puede dividir por cero');
     
}



//Escribe un programa que pida dos números al usuario.
//Después muestra un mensaje que dice cómo se relacionan entre los dos.
//Por ejemplo si escribe 5 y 7 , muestra "5 es menor que 7".

let numerador =parseInt(window.prompt("Ingresa un primer número:"));

let denominador =parseInt(window.prompt("Ingresa un segundo número"));



if (numerador > denominador)
{
    window.alert(numerador + ' es mayor que ' + denominador);
          
}else if(numerador < denominador){

  window.alert(numerador + ' es menor que ' + denominador);


     
}else if(numerador = denominador){

  window.alert(numerador + ' es igual que ' + denominador);


     
}



  //Un programa que te pregunta la temperatura que hace donde estás
  //y te sugiere qué hacer dependiendo de ella. Las recomendaciones son:

	//Si hace más de 40 grados, vete a otro sitio
	//Entre 30 y 40 grados, enciende el aire acondicionado
	//Entre 30 y 20 grados, no hagas nada
	//Entre 10 y 20 grados, enciende la calefacción
  //Si hace menos de 10 grados, vete a otro sitio
  
let temperatura =parseFloat(window.prompt("introduce la temperatura actual"));


if (temperatura > 40)
{
    window.alert(' Vete a otro sitio ');
          
}else if(temperatura < 10){

  window.alert(' Vete a otro sitio ');


     
}else if(temperatura >= 30 && temperatura <= 40){

  window.alert(' enciende el aire acondicionado ');


     
}else if(temperatura >= 20 && temperatura <= 30){

  window.alert(' no hagas nada ');


     
}else if(temperatura >= 10 && temperatura <= 20){

  window.alert(' Enciende la calefacción ');


     
}



//Escribe un programa que pida dos valores al usuario y 


//Si no que muestre el más grande de los dos.

let valor1 =parseFloat(window.prompt("Introduce un primer valor"));

let valor2 =parseFloat(window.prompt("Introduce un segundo valor"));

let restovalor1= valor1 % 6;
let restovalor2= valor2 % 6;


//Si los dos valores son iguales muestre 0

if (valor1 = valor2)
{
    window.alert(' CERO ');
     
//Si los dos valores tienen el mismo resto al dividir entre 6 mostrar el más pequeño.

}else if(restovalor1 > restovalor2){

  window.alert(restovalor2);

//Si no que muestre el más grande de los dos.

}else { 

  window.alert(restovalor1);
  
       
  }
  
      

 //Ejercicio copiado de slack


 //Creamos 2 variables de tipo STRING donde guardamos los números que nos ha dado el usuario
​
let numString1 = window.prompt("Escribe un número");
let numString2 = window.prompt("Escribe otro número");
​
//Convertimos las 2 variablos STRING de arriba a tipo INT (número) y las guardamos en 2 variables nuevas
let num1 = parseInt(numString1);
let num2 = parseInt(numString2);
​
//Si la variable num1 es mayor que 25 Y menor que 75 Y la variable num2 es mayor que 25 Y menor que 75
//Ejecutamos el código que hay entre las llaves
//Con el operador && la condición sera true sólo si se cumplen todas las condiciones concatenadas
if (num1 > 25 && num1 < 75 && num2 > 25 && num2 < 75) {
  //Con el metodo substring() guardamos cada cifra de cada número en una variable
  //Si por ejemplo el usuario ha metido los numeros 26 y 65
  //numero1 = 2
  //numero2 = 6
  //numero3 = 6
  //numero4 = 5
​
  let numero1 = numString1.substring(0, 1);
  let numero2 = numString1.substring(1);
  let numero3 = numString2.substring(0, 1);
  let numero4 = numString2.substring(1);
​
  //Este if está anidado dentro del primer if. Es decir, está dentro de las llaves
  //del primer if y solo se ejecutará si la condición del primer if se cumple
  //En este if estamos comprobando si hay algún número que sea igual entre ellos
  //(Si numero1 es igual a numero3, o si numero1 es igual a numero4 etc...)
  //al usar el operador || con que una de las condiciones concatenadas se cumpla la condición "general" será true
  if (
    numero1 === numero3 ||
    numero1 === numero4 ||
    numero2 === numero3 ||
    numero2 === numero4
  ) {
    console.log("hay dos numeros iguales");
​
    //Este else se ejecutará en caso de que la condicion (numero1 === numero3 || numero1 === numero4 etc) no se cumple
  } else {
    console.log("ninguno coincide");
  }
​
  //este else se ejecutará si la condición num1 > 25 && num1 < 75 etc no se cumple
} else {
  console.log("los números no están en el rango");
}

 

//Ejercicio copiado de slack

//guardamos en la variable frase el string que introduzca el usuario
let frase = window.prompt("Escribe una frase");
​
//guardamos en la variable mitad la mitad del length (largura) del string frase
let mitad = frase.length / 2;
​
//si el resto de dividir length (largura) de frase entre 2 es = 0 ejecutamos el código entre las llaves
//Si el resto que conseguimos al dividir un número entre 2 es 0 significa que ese número es par
if (frase.length % 2 === 0) {
  //guardamos en la variable dosCaracteres los 2 caracteres centrales del string frase
  //utilizando el metodo substring() y pasandole dos parametros.
  //el primero es la mitad de la frase -1 (porque al ser Par y querer coger las 2 letras centrales, nos tenemos que mover un indice a la izda)
  //el segundo es la mitad de la frase +1 (porque al ser Par y querer coger las 2 letras centrales, nos tenemos que mover uno a la derecha)
  let dosCaracteres = frase.substring(mitad - 1, mitad + 1);
  //sacamos en consola los dos caracteres guardados en la variable dosCaracteres
  console.log(dosCaracteres);
​
  //Este else se ejecuta si la frase no tiene un length par
} else {
  //guardamos el caracter central en la variable caracterCentral usando el metodo substring()
  //le pasamos dos parametros. El primero es la mitad exacta de la frase. Y como queremos que solo nos coja un caracter
  //el segundo parametro es mitad+1
  let caracterCentral = frase.substring(mitad, mitad + 1);
​
  //sacamos en consola la variable (caracterCentral)
  console.log(caracterCentral);
}



//Ejercicio copiado de slack

//guardamos en las variables nota1 nota2 y nota3 las diferentes respuestas del usuario
​
let nota1 = parseInt(window.prompt("Escribe la nota del primer examen"));
let nota2 = parseInt(window.prompt("Escribe la nota del segundo examen"));
let nota3 = parseInt(window.prompt("Escribe la nota del tercer examen"));
​
//Creamos la variable suma
let suma;
​
//si nota1 es mayor a nota 2 sumamos nota1 y nota3 y lo guardamos en la variable suma
if (nota1 > nota2) {
  suma = nota1 + nota3;
} else {
  //si no sumamos nota2 y nota3 y lo guardamos en la variable suma
  suma = nota2 + nota3;
}
​
//si suma es menor a 5 es un suspenso
if (suma < 5) {
  console.log(`La nota es ${suma}. Has suspendo`);
​
  //si suma es menor a 6 (osea un 5) es un sufi
} else if (suma < 6) {
  console.log(`La nota es ${suma}. Es un Suficiente`);
​
  //si suma es menor a 7 (osea un 6) es un bien
} else if (suma < 7) {
  console.log(`La nota es ${suma}. Bien`);
​
  //si suma es menor a 9 (osea 7 u 8) es un notable
} else if (suma < 9) {
  console.log(`La nota es ${suma}.  Notable`);
​
  //si suma es menor a 10 (osea 9) es un sobresaliente
} else if (suma < 10) {
  console.log(`La nota es ${suma}.  Sobresaliente`);
  
  //Y si nota no es menor a 10 es matricula
} else {
  console.log(`La nota es ${suma}. Matricula`);
}

*/

//ejercicio número 29 optativo copiado de slack

//Guardamos en la varianle frase lo que el usuario le quiera decir a Bob
​
let frase = window.prompt("Dile algo a Bob");
​
//si el ultimo caracter de la frase es ? Y los dos ultimos no son !?
if (
  frase.substring(frase.length - 1 === "?") &&
  frase.substring(frase.length - 2) !== "!?"
) {
  console.log("¡Claro!");
​
  //si el ultimo caracter de la frase es !
} else if (frase.substring(frase.length - 1) === "!") {
  console.log("¡Eh, tranquilizate!");
​
  //Si los dos ultimos caracteres de la frase son !?
} else if (frase.substring(frase.length - 2) === "!?") {
  console.log("¡Eh, tranquilízate! Yo sé lo que hago.");
​
  //Si la frase tiene un length (largura) = 0
} else if (frase.length === 0) {
  console.log("Vale con que esas tenemos...");
​
  //Si no se cumple ninguna de las anteriores condiciones
} else {
  console.log("Sin más");
}