function Person(name) {
    this.name = name
}

Person.prototype.sayHello = function () {
    console.log('name', this.name)
};

var person = new Person('name');

person.name      //name
person.sayHello();  // name name

function create() {
    var obj = new Object();
    var Con = [].shift.call(arguments);
    obj.__proto__ = Con.prototype;
    var ret = Con.call(obj, arguments);
    return ret instanceof Object ? ret : obj
}

function add(a) {
    function sum(b) {
        a = a + b;
        return sum
    }
    sum.toString = function () {
        return a;
    };
    return sum
}
