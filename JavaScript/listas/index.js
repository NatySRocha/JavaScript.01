// A lista pode receber qualquer valor:Strings,Numbers,Bool,Dooble, entre outros...
// [] index começa com 0,1,2 e etc
const names = ["Natalia", "Lorraine", "Helen", 10, false, 5.6];

const natalia = names[3];
console.log(natalia);

//push adiciona no final
names.push("Gabriela");
console.log(names);

//unsdhift adiciona no começo
names.unshift(30);
console.log(names);

//remove o ultimo item da lista
names.pop();
console.log(names);

// muda o valor no index
names[5] = "Raquel";
console.log(names);

//acha a posição do index
console.log(names.indexOf("Natalia"));

//Ordena a lista
const sortedNames = names.sort();
console.log(sortedNames);

//Quantos itens a lista possui
console.log(names.length);

//Se determinada variavel é uma lista
const namesIsArray = Array.isArray(names);
console.log(namesIsArray);
