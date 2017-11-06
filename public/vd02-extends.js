ReactDOM.render(
    <h1>REACT JS bangoku.com</h1>,
    document.getElementById("root")
);

class Person {
    constructor( name, age ) {
        this.name = name,
        this.age = age
    }

    sayHello() {
        return `Xin chao, toi la ${this.name}, nam nay ${this.age} tuoi`;
    }
}

var personObj = new Person("bangoku", 20);
console.log(personObj);
console.log(personObj.sayHello());


class Children extends Person {
    constructor( name, age, hobby ) {
        super(name, age);
        this.hobby = hobby;
    }
    sayHello() {
        return `Xin chao, em la ${this.name}, nam nay em ${this.age} tuoi`;
    }
}

var aChild = new Children("ngocsonqs", 10, "programming");
console.log(aChild);
console.log(aChild.sayHello());
