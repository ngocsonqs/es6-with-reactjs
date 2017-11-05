ReactDOM.render(
    <h1>REACT JS bangoku.com</h1>,
    document.getElementById("root")
);

/*------------START: khai báo class theo syntax cũ ---------------------*/
function Person(name, age) {
    this.name = name;
    this.age = age;
}

let personObj1 = new Person("bangoku", 20);
console.log(personObj1);
/*------------END: khai báo class theo syntax cũ ---------------------*/


/*------------START: khai báo class theo syntax mới ---------------------*/
class Person2 {
    constructor( name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        return `Hello!!! My name is ${this.name}, ${this.age} years old. `;
    }
}

let personObj2 = new Person2("bangoku", 20);
console.log(personObj2);
console.log(personObj2.sayHello());
/*------------END: khai báo class theo syntax mới ---------------------*/
