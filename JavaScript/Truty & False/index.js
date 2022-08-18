// Duas exclamações(!!) bool checam
//o true e o false das variaveis

//String vazia é false
const x = "";

console.log(!!x);

if (x) {
  console.log(x);
}

const y = 0;
console.log(!!y);

const a = null;
const b = undefined;

//False

const list = [];
console.log(!!list);

const object = {};
if (object) {
  console.log(!!object);
}

// Uma Exclamação (!) inverte o bool atual true e false

console.log(!list);
console.log(!false);
