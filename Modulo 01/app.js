const dia = 3 ;

switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3: 
        console.log("Miercoles");
        break;
    case 4:
        console.log("Dia no valido");
}


for (let i = 1; i <= 5; i++) {
    console.log(`Numero: ${i}`);
}

let j = 1;
while (j <= 5) {
    console.log(`Numero: ${j}`);
    j++; 
}

let k = 1;
do {
    console.log (`Numero: ${k}`);
    k++;
} while (k <= 5);
















let numero = 7;

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}

let n = 1;
let suma = 0;
while (n <= 100) {
    suma += n;
    n++;
}
console.log(`La suma del 1 al 100 es: ${suma}`);

let ahorroMensual = 50000;
let acumulado = 0;
let mes = 1;
do {
    acumulado += ahorroMensual;
    console.log(`Mes ${mes}: $${acumulado}`);
    mes++;
} while (mes <= 12);