const prompt = require("prompt-sync")();

let count ;
count = prompt("Escriba un número: ")

if (count < 3 ){
    console.log("Menor que 2");
    count = count + 1;
}else{
    console.log("Es mayor que 3");
}

let countt;
countt = Number(prompt("Escriba un número: "));

if (isNaN(countt)) {
    console.log("No es un número");
} else if (countt < 3) {
    console.log("Menor que 3");
    countt = countt + 1;
} else {
    console.log("Mayor o igual a 3");
}


//& if anidado
    let count2;
    count = prompt("Escriba un número: "); 
    
    count2 = Number(count);
    
    if (count2 < 3) {
        console.log("Menor que 3");
        if (count2 < 1) { 
            console.log("Y también menor que 1");
        }
        count2 = count2 + 1; 
    } else {
        console.log("Es mayor o igual que 3");
    }

//& capas de if anidado
let count3 = Number(prompt("Escriba un número: "));

if (count3 < 10) {
    console.log("Menor que 10");
    if (count3 < 5) {
        console.log("Menor que 5");
        if (count3 < 3) {
            console.log("Menor que 3");
        }
    }
} else {
    console.log("Mayor o igual que 10");
}

//& else if 

let count4 = Number(prompt("Escriba un número: "));

if (count4 < 3) {
    console.log("Menor que 3");
} else if (count4 < 5) {
    console.log("Entre 3 y 5");
} else {
    console.log("Mayor o igual que 5");
}





