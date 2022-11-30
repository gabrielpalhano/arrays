let num = [6, 5, 7, 9]
num[4] = 3
num[4] = 2
num.push(1)
num.length

console.log(num);
console.log(`O número de elementos é: ${num.length}`);
console.log(`O primeiro elemento é: ${num[0]}`);
//console.log(`Colocando os elementos em ordem crescente: ${num.sort()}`);

/* for(let pos = 0; pos < num.length; pos++) {
    console.log(`O valor no índice ${pos} é igual a: ${num[pos]}`);
} */

for (let pos in num) {
    console.log(`O valor no índice ${pos} é igual a: ${num[pos]}`);
}

let indice = num.indexOf(3);

    if(indice == -1 ) {
        console.log('O valor não foi encontrado!');
    }else {
        console.log(`O valor digitado foi encontrado e está na posição ${indice}`);
    }
