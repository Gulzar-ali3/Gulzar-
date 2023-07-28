
// object literal Syntax

const person:{name:string; age:number;address:string; isStudent:boolean} = {
    name:`Ahmed`,
    age: 26,
    address:`Pakistan`,
    isStudent:true
}
console.log(person.name);
console.log(person.age);
console.log(person.address);
console.log(person.isStudent);


// 2 Interface and Type
interface userTyped{
    name:string,
    age:number,
    address:string,
}

let user:userTyped = {
    name:`Gulzar`,
    age:25,
    address:`Pakistan`
}
console.log(user.name);
console.log(user.age);
console.log(user.address);

//TYPESCRIPT TYPE TEMPLATE
let Person2 = {
    firstName : `Gulzar`,
    lastName : `Ali`,
    sayHello: function(){}
}
Person2.sayHello = function(){
    console.log("hello " + Person2.firstName);
}
Person2.sayHello();

//object as function perameters

let person3 = {
    firstname : "Ahmed",
    lastname : "Gulzar"
};

let invokeperson = function(obj:{firstname:string , lastname:string}){
    console.log(`First name : ${obj.firstname}`);
    console.log(`last name : ${obj.lastname}`);
    }
 invokeperson(person3);   

 // Anonymous Object 

 let invokeperson2 = function(obj1:{first_name:string , last_name:string}){
    console.log(`first name :${obj1.first_name} \nlast name : ${obj1.last_name}`);
    console.log(`last name : ${obj1.last_name}`);
 }
 invokeperson2({first_name:"Asad" , last_name:"Hanif"});