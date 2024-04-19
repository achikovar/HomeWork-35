// 1.

// class Person {
//   constructor(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
//   introduce() {
//     return `hello, my name is ${this.name}, I am ${this.age} years old`;
//   }
// }

// const first = new Person("achiko", 36, "male");
// const second = new Person("mamuka", 30, "male");

// console.log(first.introduce());
// console.log(second.introduce())

// 2

// class Shape {
//   constructor(type, test) {
//     this.type = type;
//     this.test = test;
//   }
// }

// class Circle extends Shape {
//   constructor(radius) {
//     super("წრე", 12);
//     this.radius = radius;
//   }
//   calculatArea() {
//     return this.radius ** 2 * 3.14;
//   }
// }

// class Rectangle extends Shape {
//   constructor(width, height) {
//     super("მართკუთხედი");
//     this.width = width;
//     this.height = height;
//   }

//   calculatArea() {
//     return this.width * this.height;
//   }
// }

// const first = new Circle(4);
// const second = new Rectangle(4, 5);

// console.log(`ფიგურა : ${first.type} --- ფრათობი : ${first.calculatArea()}`);
// console.log(`ფიგურა : ${second.type} --- ფრათობი : ${second.calculatArea()}`);
