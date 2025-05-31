// STEP 1
// Named class declaration for Cat
class Cat {
  constructor(name) {
    this.name = name;
  }
}

// Anonymous class expression for Dog
const Dog = class {
  constructor(name) {
    this.name = name;
  }
};

// STEP 2
// const myCat = new Cat("Whiskers");
// const myDog = new Dog("Rover");

// STEP 3
// class Animal {
//   constructor() {
//     console.log("The Animal has been created");
//   }
// }
// const animal1 = new Animal();

// STEP 4
// class Animal {
//   constructor(message) {
//     console.log(message);
//   }
// }
// const animal2 = new Animal("A new animal says hello!");

// STEP 5
// class Animal {
//   constructor(type, breed, color, height, length) {
//     this.type = type;
//     this.breed = breed;
//     this.color = color;
//     this.height = height;
//     this.length = length;
//   }
// }
// const animal3 = new Animal("dog", "labrador", "black", "60cm", "100cm");

// STEP 6
// for (let prop in animal3) {
//   console.log(`${prop}: ${animal3[prop]}`);
// }

// STEP 7
// class Animal {
//   constructor(type, breed, color, height, length) {
//     this.type = type;
//     this.breed = breed;
//     this.color = color;
//     this.height = height;
//     this.length = length;
//   }

//   speak() {
//     if (this.type.toLowerCase() === "dog") {
//       return `The ${this.color} dog is barking!`;
//     } else if (this.type.toLowerCase() === "cat") {
//       return `The ${this.color} cat is meowing!`;
//     }
//   }
// }
// const animal4 = new Animal("cat", "persian", "white", "25cm", "40cm");
// console.log(animal4.speak());

// STEP 8
// class Animal {
//   #type;
//   #breed;
//   #color;
//   #height;
//   #length;

//   constructor(type, breed, color, height, length) {
//     this.#type = type;
//     this.#breed = breed;
//     this.#color = color;
//     this.#height = height;
//     this.#length = length;
//   }

//   #checkType() {
//     return this.#type.toLowerCase() === "dog" ? "dog" : "cat";
//   }

//   speak() {
//     return `The ${this.#checkType()} has made a noise!`;
//   }
// }
// const animal5 = new Animal("Dog", "bulldog", "brown", "50cm", "90cm");
// console.log(animal5.speak());

// STEP 9
// String.prototype.findWords = function(word) {
//   const regex = new RegExp(`\\b${word}\\b`, "gi");
//   const matches = this.match(regex);
//   const count = matches ? matches.length : 0;
//   alert(`The word "${word}" was found ${count} times.`);
// };
// const paragraph = "Hello world. Hello people. Hello JavaScript.";
// paragraph.findWords("Hello");
