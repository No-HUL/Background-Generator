const obj = {
    name: 'Billy',
    age: 25,
    isCool: true
}

const { name, age, isCool } = obj;
//const name = obj.name;
//const age = obj.age;
//const isCool = obj.isCool;

const a = 'Simon';
const b = true;
const c = {};

const obj2 = {
    a,
    b,
    c
}

//Template strings
const name1 = 'Sally';
const age1 = 34;
const pet = 'horse';

const greeting = `Hello ${name1} you seem to be ${age1-10}. What a lovely ${pet} you have.`

//Default arguments
function greet(name='', age=30, pet='cat') {//if no argument is passed, it will take the default value
    return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have.`
}

//Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);
console.log(multiplyBy5(4)); //20

//Compose
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5); //7

//Avoiding side effects, functional purity

//Advanced Arrays
const array = [1, 2, 10, 16];
const double = [];
const newArray = array.forEach(num => { //forEach does not return anything
    double.push(num * 2);
})

//map, filter, reduce
const mapArray = array.map(num => num * 2); //returns a new array[2, 4, 20, 32]

//filter
const filterArray = array.filter(num => num > 5); //returns a new array[10, 16]

//reduce
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 0); //returns 29
//0 is the initial value of the accumulator

//reference type
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };
object1 === object2; //true
object1 === object3; //false
//object1和object2指向同一内存位置
//object3指向不同的内存位置

//context上下文
window === this; //true
const object4 = {
    a: function() {
        console.log(this);
    }
}//object4.a()返回object4
//this指向调用它的对象

//instantiation实例化
class Player {
    constructor(name, type) {
        console.log('player', this);//return Wizard {name: "Shelly", type: "Healer"}
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {//继承Player
    constructor(name, type) {
        super(name, type);//调用父类的constructor
        console.log('wizard', this);//return Wizard {name: "Shelly", type: "Healer"}
    }
    play() {
        console.log(`WEEEEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');