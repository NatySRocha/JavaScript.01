for (let index = 0; index < 10; index++) {
  console.log(index);
}

for (let index = 1; index <= 30; index++) {
  console.log(index);
}

const cars = ["Tracker", "Jeep Compass", "T-Cross"];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

for (let car of cars) {
  console.log(car);
}

cars.forEach(function (car, index) {
  console.log(index);
  console.log(car);
});

//while=enquanto

let index = 0;

while (index < 10) {
  console.log("index é menor do que 10!");
  //index = index + 1;
  //index += 1;
  //mesma coisa que acima
  index++;
}
