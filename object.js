// object literal Syntax
var person = {
    name: "Ahmed",
    age: 26,
    address: "Pakistan",
    isStudent: true
};
console.log(person.name);
console.log(person.age);
console.log(person.address);
console.log(person.isStudent);
var user = {
    name: "Gulzar",
    age: 25,
    address: "Pakistan"
};
console.log(user.name);
console.log(user.age);
console.log(user.address);
//TYPESCRIPT TYPE TEMPLATE
var Person2 = {
    firstName: "Gulzar",
    lastName: "Ali",
    sayHello: function () { }
};
Person2.sayHello = function () {
    console.log("hello " + Person2.firstName);
};
Person2.sayHello();
//object as function perameters
var person3 = {
    firstname: "Ahmed",
    lastname: "Gulzar"
};
var invokeperson = function (obj) {
    console.log("First name : ".concat(obj.firstname));
    console.log("last name : ".concat(obj.lastname));
};
invokeperson(person3);
// Anonymous Object 
var invokeperson2 = function (obj1) {
    console.log("first name :".concat(obj1.first_name, " \nlast name : ").concat(obj1.last_name));
    console.log("last name : ".concat(obj1.last_name));
};
invokeperson2({ first_name: "Asad", last_name: "Hanif" });
