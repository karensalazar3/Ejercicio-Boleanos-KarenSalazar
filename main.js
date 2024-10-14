const  booleano1 = true
const  booleano2 = false

const booleanoAnd = booleano1 && booleano2

console.log("booleanoAnd = "+ booleanoAnd)

const booleanoOr = booleano1 || booleano2
console.log("booleanoOr = " + booleanoOr) 

const booleanoNot = !booleano1
console.log("booleanoNot = " + booleanoNot)

const booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2))
console.log("booleanoMix0 = " + booleanoMix0)

/*Operadores*/

const valorDivision = (17/3).toFixed(2)

console.log("valorDivision = " + valorDivision)

const valorResto = 17%7
console.log("valorResto = " + valorResto)

/*Logica de programación*/

const A = 9
const B = "9"

if (A==B) {
    console.log("Son iguales")
} else {
    console.log("No son iguales")

}

if (A===B) {
    console.log("Son iguales")
} else {
    console.log("No son iguales")

}

const mochila = ["lapiz", "lapiz","lapiz","lapiz","lapiz","lapiz","lapiz","lapiz","cuaderno","hoja"]
console.log("Cantidad de objetos de mi mochilas = " + mochila.length)

if (mochila.length>10) {
    console.log("No puedo cargar con tantas cosas")
    
} else if(2<=mochila.length && mochila.length <= 10){
    console.log("Que bien voy con mi mochila ")
}else {
    console.log("Creo que no necesito una mochila")
}

let contarHasta10 = 0

for (let i = 0; i < 10; i++) {
    contarHasta10 += 1
    console.log("contarHasta10 = "+ contarHasta10)
    
}

const diaFestivo = false

diaFestivo == true ? console.log("Hoy no trabajo") : console.log("Hoy trabajo")

const arrayBucle =[]
for (let i = 4; i <= 18; i++) {
    arrayBucle.push(i)  
}
console.log("arrayBucle = "+arrayBucle)
 let resultado = 0
 for (let i = 0; i < arrayBucle.length; i++) {
   resultado += arrayBucle[i]
    
 }
 console.log("resultado = "+resultado)

 /*for of este itera sobre los valores de un objeto*/

 const arrayMensaje = ["Con", "Sofia", "aprendiendo", "bucles"]
 for (const element of arrayMensaje) {
    console.log(element)
 }

 /*for i este itera sobre los indices(posiciones) del objeto */

 for (const i in arrayMensaje) {
    console.log(arrayMensaje[i])
    
 }
let i = 0
 while (i <= 20) {
    i++
    if(i % 3 == 0){
        console.log("Valor Iterador = "+i)
        console.log("Patata")
    }
    
 }

//EXTRAS:

let gente  = [
  {
    nombre: "Jamiro",
    edad: 45,
  },
  {
    nombre: "Juan",
    edad: 35,
  },
  {
    nombre: "Paco",
    edad: 34,
  },
  {
    nombre: "Pepe",
    edad: 14,
  },
  {
      nombre: "Pilar",
      edad: 24,
    },
    {
      nombre: "Laura",
      edad: 24,
    },
    {
      nombre: "Jenny",
      edad: 10,
    },
  ];

  let genteCon4Letras = [];

  for (let i = 0; i < gente.length; i++) {
   if (gente[i].nombre.length === 4) {
    genteCon4Letras.push(gente[i]);
    
   }
  }
console.log(genteCon4Letras);

//gente cuyo nombre empieza por J <40 años

let genteJMenores40 =[];

for (let i = 0; i < gente.length; i++) {
  if (gente[i].nombre[0] === 'J' && gente[i].edad < 40) {
    genteJMenores40.push (gente[i]);
  }
  
}

console.log(genteJMenores40);


