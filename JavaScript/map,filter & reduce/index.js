//O Map ela vai executar uma funcao em cada item e vai retornar

const number = [1, 2, 3, 4, 5];

const numberMultipliedByTwo = number.map(function (number) {
  return number * 2;
});
console.log(numberMultipliedByTwo);

const numberMultipliedByTree = number.map(function (number) {
  return number * 3;
});
console.log(numberMultipliedByTree);

const numberMultipliedByFive = number.map(function (number) {
  return number * 5;
});
console.log(numberMultipliedByFive);

//Filter:Filtrar uma lista
const age = [3, 8, 12, 17, 19, 21, 24];

const evenAge = age.filter(function (age) {
  return age % 2 === 0;
});

console.log(evenAge);

const oddAge = age.filter(function (age) {
  return age % 3 === 0;
});

console.log(oddAge);

//Reduce: Reduzir a lista por 1

const sumOfAge = age.reduce(function (age, accumulator) {
  return accumulator + age;
}, 100);

console.log(sumOfAge);
