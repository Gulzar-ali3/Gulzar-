// // simple array
var people = [
    { name: "Gulzar", age: 24 },
    { name: "Hanif", age: 25 },
    { name: "Asad", age: 26 }
];
console.log(people[0].name + people[1].age);
people[2].name = "Bilal";
people[1].age = 22;
for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
    var person = people_1[_i];
    console.log("".concat(person.name, " is ").concat(person.age, " years old"));
}
