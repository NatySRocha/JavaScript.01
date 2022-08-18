const sum = 1 + 3;

if (sum === 2) {
  console.log("Sum is 2!");
} else if ("Sum is 3!") {
  console.log("Sum is 3!");
} else {
  console.log("Sum is not 2!");
}

const sumSub = 8 - 6;

if (sumSub === 4) {
  console.log("Sum is 4!");
} else if (sumSub === 2) {
  console.log("sumSub is 6!");
} else {
  console.log("sumSub is 2!");
}

//&& = And verifica 2 condições se for true ||= or apenas 1

const sum1 = 2 + 2;
const sum2 = 3 + 10;

if (sum === 4 && sum2 === 6) {
  console.log("Sum is 4 and sum2 is 6!");
}

if (sum === 4 || sum2 === 6) {
  console.log("Sum is 4 or sum2 is 6!");
}

const car = "Compass";

switch (car) {
  case "Tracker":
    console.log("Tracker é incrivel");
    break;
  case "Compass":
    console.log("Muito potente");
    break;
  case "T-Cross":
    console.log("Design impecavel");
    break;
}

const sum = 1 + 2;

let number = 2 ? 2 : 4;

// mesma coisa que acima
//if (sum === 2) {
//number = 2;
//} else {
//number = 4;
//}
console.log(number);
