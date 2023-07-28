// // simple array

// let myVar:string[] = [`ahmed`,`gulzar`];
// console.log(myVar); // print all value 
// console.log(myVar[0]); // print only first value
// console.log(myVar[1]); 

// // 
// let myvar:string[];
// myvar = [`Gulzar` , `Ahmed`];
// console.log(myvar);

type person = {
    name: string;
    age: number;
};

const people:person[] = [
  {name: `Gulzar` , age:24},
  {name: `Hanif` , age: 25},
  {name: `Asad` , age: 26}
];
console.log(people[0].name + people[1].age);

people[2].name = "Bilal";
people[1].age = 22;

for(const person of people){
    console.log(`${person.name} is ${person.age} years old`);
}