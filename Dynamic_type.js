var age;
age = true;
console.log(age);
age = 25;
console.log("You're Age is : ".concat(age, " type of:") + typeof age);
age = "hello";
console.log("You're Age is ".concat(age, " type of:") + typeof age);
age = { age: "Gulzar" };
console.log(age);
var mixed = [];
mixed.push(5);
console.log(mixed);
mixed.push("Asad");
console.log(mixed);
mixed.push(true);
console.log(mixed);
var Uname;
Uname = { UserName: "Gulzar Ahmed", UserId: 124356 };
console.log(Uname);
function processDynamicValue(value) {
    console.log("Value:", value);
}
processDynamicValue(42); // Output: Value: 42
processDynamicValue("Hello"); // Output: Value: Hello
processDynamicValue([1, 2, 3]); // Output: Value: [1, 2, 3]
