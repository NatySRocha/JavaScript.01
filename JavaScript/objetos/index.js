const person = {
  firstName: "Natalia",
  lastName: "Rocha",
  age: 30,
  hobbies: [
    "Mimar meus gatos",
    "cinema",
    "patins",
    "cozinhar",
    "Front End",
    "UX",
  ],
  dog: {
    name: "Ted",
    age: 12,
    cor: "Preto",
  },
  Foods: {
    Favorite: "Churrasco",
    Weekly: "Hamburguer Artesanal",
    Short: "Camarão",
  },
};
//const firstName = person.firstName;
//const lasttName = person.lastName;
//const age = person.age;
//const hobbies = person.hobbies;

//Mostra as mesmas propiedades acima
const { age, hobbies, firstName, lastName } = person;

const read = person.hobbies[5];

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(hobbies);
console.log(read);

//person.dog = "Ted";
console.log(person);

const todos = [
  {
    id: 1,
    description: "Estudar programação",
    isCompleted: false,
  },

  {
    id: 2,
    description: "Ler",
    isCompleted: true,
  },

  {
    id: 3,
    description: "Treinar",
    isCompleted: true,
  },
];

const descriptionOfLastTodo = todos[2].description;
console.log(descriptionOfLastTodo);
