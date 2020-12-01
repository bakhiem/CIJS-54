class Person{
  name;
  age;
  address;
  gender;
  constructor(name, age, address, gender) {
    this.name = name
    this.age = age
    this.address = address
    this.gender = gender
  }
  speak() {
    console.log(
    `Hello, I'm ${this.name}
      I'm ${this.age} years old
      I'm from ${this.address}
    `)
  }
}
const duyet = new Person('Duyet', 20, 'Ha Noi', 'Female')
// const abc = new Person('Abc', 21, 'Ha Tay', 'Male')
// duyet.speak()

// Class Animal
// species, color, numberOfLeg, gender, name
// eat => con + name + dang an
// speak => con + name + dang keu
// isDangerous => so chan > 4 hoac so chan = 0
// in ra co nguy hiem hay ko
class Animal {
  species;
  color;
  numberOfLeg;
  gender;
  name;
  constructor(species, color, numberOfLeg, gender, name) {
    this.species = species
    this.color = color
    this.numberOfLeg = numberOfLeg
    this.gender = gender
    this.name = name
  }
  eat () {
    console.log(`Con ${this.name} đang ăn`)
  }
  speak() {
    console.log(`Con ${this.name} đang kêu`)
  }
  isDangerous() {
    // if (this.numberOfLeg > 4 || this.numberOfLeg === 0) {
    //   console.log('Nguy hiểm đấy')
    // } else {
    //   console.log('Không nguy hiểm :v')
    // }
    // const message = (this.numberOfLeg > 4 || this.numberOfLeg === 0) ? 'Nguy hiểm đấy' : 'Không nguy hiểm'
    console.log((this.numberOfLeg > 4 || this.numberOfLeg === 0) ? 'Nguy hiểm đấy' : 'Không nguy hiểm')
  }
}
const myTiger = new Animal('an thit', 'vang', 4, 'male', 'meo')
console.log(myTiger)

// static method
class MyMath{
  static sum(a, b) {
    return a + b
  }
  static div(a, b) {
    return a / b
  }
}
// console.log(MyMath.sum(1,2))
// console.log(Math.ceil(1.2))

// ke thua

class Employee extends Person{
  salary;
  constructor(name, age, address, gender, salary) {
    super(name, age, address, gender)
    this.salary = salary
  }
  speak() {
    console.log('Make America great again!')
  }
  showOff() {
    console.log('My salary is ' + this.salary)
  }
}
const myEmployee = new Employee('Trump', 76, 'New Yorks', 'Female', '1m$')
console.log(myEmployee.showOff())

// ke thua
// tao class dog ke thua animal, khi speak() in ra gâu gâu
class Dog extends Animal{
  constructor(species, color, numberOfLeg, gender, name) {
    super(species, color, numberOfLeg, gender, name)
  }
  speak() {
    console.log(`Con chó ${this.name} kêu gâu gâu`)
  }
}
const myDog = new Dog('Cỏ', 'vàng', 4, 'Đực', 'Cậu Vàng')
myDog.speak()