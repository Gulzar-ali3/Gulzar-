
let age:any;

age = true ;
console.log(age);

age = 25 ;
console.log(`You're Age is : ${age} type of:`+ typeof age);

age = `hello`;
console.log(`You're Age is ${age} type of:`+ typeof age);

age = {age:"Gulzar"};
console.log(age);

let mixed:any [] =  [];

mixed.push(5);
console.log(mixed);
mixed.push("Asad");
console.log(mixed);
mixed.push(true);
console.log(mixed);

let Uname:{UserName:any , UserId:any};
Uname = {UserName:`Gulzar Ahmed` , UserId:124356};
console.log(Uname);

function processDynamicValue(value: any): void {
    console.log("Value:", value);
  }
  
  processDynamicValue(42);        // Output: Value: 42
  processDynamicValue("Hello");   // Output: Value: Hello
  processDynamicValue([1, 2, 3]); // Output: Value: [1, 2, 3]
  
