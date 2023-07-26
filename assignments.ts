// question 2
//In TypeScript, you can store a person's name in a variable and print a personalized message using the following code:*
let personName = "Eric";
let message = `Hello ${personName}, would you like to learn some Python today?`;
console.log(message);

// question 3
let personName: string = "Gulzar Ali";

console.log("Lowercase:", personName.toLowerCase());
console.log("Uppercase:", personName.toUpperCase());

function toTitleCase(str: string): string {
  return str.replace(/\w\S*/g, function(txt){  
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

console.log("Title case:", toTitleCase(personName));

// question 4
let quote: string = "The greatest glory in living lies not in never falling, but in rising every time we fall.";
let author: string = "Nelson Mandela";

console.log(`"${quote}" - ${author}`);

// question 5 

let famous_person: string = "Albert Einstein";
let quote: string = "A person who never made a mistake never tried anything new.";

let message: string = `${famous_person} once said, "${quote}"`;

console.log(message);

// question 6

let nameWithWhitespace: string = "\t\n   John Doe    \t\n";

console.log("Name with whitespace:", nameWithWhitespace);
console.log("Stripped name:", nameWithWhitespace.trim());

// question 7

console.log("Addition:", 5 + 3);
console.log("Subtraction:", 10 - 2);
console.log("Multiplication:", 4 * 2);
console.log("Division:", 16 / 2);

// question 9

let favoriteNumber: number = 42;
let message: string = `My favorite number is ${favoriteNumber}.`;
console.log(message);
// question 10

// Program: Addition and Subtraction
// Author: gulzar
// Date: July 8, 2023
// Description: Performs addition and subtraction operations on two numbers.

let num1: number = 10; // Define the first number
let num2: number = 5; // Define the second number

let sum: number = num1 + num2; // Perform addition operation
console.log("Sum:", sum); // Print the sum

let difference: number = num1 - num2; // Perform subtraction operation
console.log("Difference:", difference); // Print the difference

// question 11

let names: string[] = ["Bilal", "Gulzar", "Naseer", "Zameer"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}


// question 12

let names: string[] = ["Bilal", "Gulzar", "Naseer", "Zameer"];
let message: string = "Hello, ";

for (let i = 0; i < names.length; i++) {
  console.log(message + names[i] + "!");
}


//  question 13

let favoriteTransportation: string[] = ["motorcycle", "car", "bicycle", "land cruser"];

for (let i = 0; i < favoriteTransportation.length; i++) {
  console.log("I would like to own a", favoriteTransportation[i] + ".");
}


// question 14

let guestList: string[] = ["Asad", "Hanif", "Imran"];

for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]}, you are cordially invited to dinner. Please join us for an evening of stimulating conversation.`);
}


// question 15

let guestList: string[] = ["Asad", "Hanif", "Imran"];

// Someone can't make it, so remove them from the guest list and store their name
let unableToAttend: string = guestList.pop()!;

// Think of someone else to invite and add them to the guest list
let newGuest: string = "Naseer";
guestList.push(newGuest);

for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]}, you are cordially invited to dinner. Please join us for an evening of stimulating conversation.`);
}

console.log(`Unfortunately, ${unableToAttend} can't make it to the dinner.`);

// Replace the name of the guest who can't make it with the name of the new person
let index: number = guestList.indexOf(unableToAttend);
guestList[index] = newGuest;

console.log(`Updated guest list:`);
for (let i = 0; i < guestList.length; i++) {
  console.log(`- ${guestList[i]}`);
}

// question 16

// Declare the array to store the list of guests
let guests: string[] = ["Hanif", "Imran", "Majid"];

// Print the original list of guests
console.log("Original guest list:");
console.log(guests);

// Add one new guest to the beginning of the array
guests.unshift("Shoukat");

// Add one new guest to the middle of the array
const middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, "Asad");

// Use append() to add one new guest to the end of the list
guests.push("Naseer");

// Print a message informing people about the bigger dinner table
console.log("Good news! We found a bigger dinner table!");

// Print a new set of invitation messages, one for each person in your list
console.log("Invitation messages:");
guests.forEach(guest => {
  console.log(`Dear ${guest}, you are invited to dinner. Please join us!`);
});

// question 17

// Declare the array to store the list of guests
let guests: string[] = ["Asad", "Hanif", "Imran", "Naseer", "Majid", "Shoukat"];

// Print a message informing people about the bigger dinner table
console.log("Good news! We found a bigger dinner table!");

// Print a new set of invitation messages, one for each person in your list
console.log("Invitation messages:");
guests.forEach(guest => {
  console.log(`Dear ${guest}, you are invited to dinner. Please join us!`);
});

// Print a message saying that you can invite only two people for dinner
console.log("\nOh no! The new dinner table won't arrive in time, and we can only invite two people for dinner.");

// Remove guests from your list one at a time until only two names remain in your list
while (guests.length > 2) {
  const removedGuest = guests.pop();
  console.log(`Sorry, ${removedGuest}, we can't invite you to dinner this time.`);
}

// Print a message to each of the two people still on your list, letting them know they're still invited
console.log("\nRemaining guests who are still invited:");
guests.forEach(guest => {
  console.log(`Dear ${guest}, you're still invited to dinner. See you there!`);
});

// Remove the last two names from your list, so you have an empty list
guests.splice(0, guests.length);

// Print your list to make sure you actually have an empty list at the end of your program
console.log("\nFinal guest list:");
console.log(guests);

// question 18

let placesToVisit: string[] = [
    "Paris, France",
    "Tokyo, Japan",
    "Machu Picchu, Peru",
    "Santorini, Greece",
    "Serengeti National Park, Tanzania"
  ];
  
  console.log("Places I'd like to visit:");
  
  for (let i = 0; i < placesToVisit.length; i++) {
    console.log(`- ${placesToVisit[i]}`);
  }
  
  // question 19

  // Declare the array to store the list of guests
let guests: string[] = ["Asad", "Hanif", "Imran", "Majid", "Naseer", "Shoukat"];

// Print a message informing people about the bigger dinner table
console.log("Good news! We found a bigger dinner table!");

// Print a new set of invitation messages, one for each person in your list
console.log("Invitation messages:");
guests.forEach(guest => {
  console.log(`Dear ${guest}, you are invited to dinner. Please join us!`);
});

// Print a message indicating the number of people invited to dinner
console.log(`Number of people invited to dinner: ${guests.length}`);

  // question 20

  // Declare the array to store the list of programming languages
let programmingLanguages: string[] = [
  "JavaScript",
  "Python",
  "Java",
  "TypeScript",
  "C++",
  "Ruby",
  "Swift",
  "PHP",
  "Rust",
];

// Print the list of programming languages
console.log("List of Programming Languages:");
programmingLanguages.forEach(language => {
  console.log(language);
});

  // question 21

  
  // Creating an object for a book
let book = {
    title: "Java 2 fifth edition",
    author: "Herbert Schildt",
    year: 2016,
  };
  
  // Creating an object for a car
  let car = {
    make: "Tesla",
    model: "Model S",
    year: 2022,
  };
  
  // Creating an object for a smartphone
  let smartphone = {
    brand: "Apple",
    model: "iPhone 12",
    year: 2020,
  };
  
  // Printing the objects
  console.log("Book:", book);
  console.log("Car:", car);
  console.log("Smartphone:", smartphone);
  
  // question 22 

  // function tryArrayIndexError() {
  //   const array = [1, 2, 3, 4, 5];
  
  //   // Intentional array index error by accessing an out-of-bounds index
  //   const outOfBoundsIndex = 10;
  //   console.log(array[outOfBoundsIndex]);
  // }
  
  // tryArrayIndexError();
  // correct program here 

  function tryArrayIndexError() {
    const array = [1, 2, 3, 4, 5];
  
    // Intentional array index error by accessing an out-of-bounds index
    const outOfBoundsIndex = 2;
    console.log(array[outOfBoundsIndex]);
  }
  
  tryArrayIndexError();
  


// question 23

let car: string = 'subaru';

console.log("Test 1: Is car == 'subaru'? Prediction: True");
console.log(car == 'subaru');

console.log("\nTest 2: Is car == 'honda'? Prediction: False");
console.log(car == 'honda');

console.log("\nTest 3: Is car != 'ford'? Prediction: True");
console.log(car != 'ford');

console.log("\nTest 4: Is car != 'subaru'? Prediction: False");
console.log(car != 'subaru');

console.log("\nTest 5: Is car === 'subaru'? Prediction: True");
console.log(car === 'subaru');

console.log("\nTest 6: Is car === 'toyota'? Prediction: False");
console.log(car === 'toyota');

console.log("\nTest 7: Is car !== 'subaru'? Prediction: False");
console.log(car !== 'subaru');

console.log("\nTest 8: Is car !== 'mazda'? Prediction: True");
console.log(car !== 'mazda');

console.log("\nTest 9: Is car.startsWith('su')? Prediction: True");
console.log(car.startsWith('su'));

console.log("\nTest 10: Is car.includes('aru')? Prediction: True");
console.log(car.includes('aru'));


// question 24

// Tests for equality and inequality with strings
let string1: string = "Hello";
let string2: string = "World";

console.log("Equality test with strings: ", string1 == string2); // False
console.log("Inequality test with strings: ", string1 != string2); // True

// Tests using the lower case function
let text: string = "Gulzar";

console.log("Lower case test: ", text.toLowerCase() == "gulzar"); // True

// Numerical tests
let num1: number = 5;
let num2: number = 10;

console.log("Equality test with numbers: ", num1 == num2); // False
console.log("Inequality test with numbers: ", num1 != num2); // True
console.log("Greater than test: ", num1 > num2); // False
console.log("Less than test: ", num1 < num2); // True
console.log("Greater than or equal to test: ", num1 >= num2); // False
console.log("Less than or equal to test: ", num1 <= num2); // True

// Tests using "and" and "or" operators
let value1: boolean = true;
let value2: boolean = false;

console.log("Logical AND test: ", value1 && value2); // False
console.log("Logical OR test: ", value1 || value2); // True

// Test whether an item is in an array
let fruits: string[] = ["apple", "banana", "orange"];

console.log("Array inclusion test: ", fruits.includes("banana")); // True

// Test whether an item is not in an array
console.log("Array exclusion test: ", !fruits.includes("grape")); // True


// question 25

let alien_color: string = 'green';

if (alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points.");
}


//question 26

let alien_color: string = 'red';

if (alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points.");
}
else(alien_color === 'red'){
    console.log("Congratulations! You just earned 10 points");
}


// question 27

let alien_color: string = 'red';

if (alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points.");
} else if (alien_color === 'yellow') {
  console.log("Congratulations! You just earned 10 points.");
} else if (alien_color === 'red') {
  console.log("Congratulations! You just earned 15 points.");
}

// question 28

let age: number = 25;

if (age < 2) {
  console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
  console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
  console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
  console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}


// question 29

let favorite_fruits: string[] = ['banana', 'apple', 'mango'];

if (favorite_fruits.includes('banana')) {
  console.log("You really like bananas!");
}

if (favorite_fruits.includes('apple')) {
  console.log("You really like apples!");
}

if (favorite_fruits.includes('mango')) {
  console.log("You really like mangoes!");
}

if (favorite_fruits.includes('orange')) {
  console.log("You really like oranges!");
}

if (favorite_fruits.includes('strawberry')) {
  console.log("You really like strawberries!");
}

// question 30

function printGreeting(username: string) {
  if (username.toLowerCase() === 'admin') {
    console.log(`Hello ${username}, would you like to see a status report?`);
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}

const usernames: string[] = ['Bilal', 'Hanif', 'Adam', 'Hashim', 'Sattar'];

for (const username of usernames) {
  printGreeting(username);
}



// question 31

let users: string[] = ['Asad', 'Hanif', 'Imran'];

if (users.length > 0) {
  for (let user of users) {
    console.log("Hello, " + user + "!");
  }
} else {
  console.log("We need to find some users!");
}

users = []; // Removing all usernames from the array

if (users.length > 0) {
  for (let user of users) {
    console.log("Hello, " + user + "!");
  }
}
 else {
  console.log("We need to find some users!");
}

// question 32

function checkUsernameAvailability(currentUsers: string[], newUsers: string[]) {
  for (const newUser of newUsers) {
    const isUsernameTaken = currentUsers.some(
      (currentUsername) => currentUsername.toLowerCase() === newUser.toLowerCase()
    );

    if (isUsernameTaken) {
      console.log(`Sorry, the username '${newUser}' is already taken. Please choose a different one.`);
    } else {
      console.log(`Congratulations, the username '${newUser}' is available.`);
    }
  }
}

const currentUsers: string[] = ['Asad', 'Hanif', 'Naseer', 'Imran', 'Shoukat'];
const newUsers: string[] = ['Abdul', 'Saifi', 'Sarfaraz', 'Gulzar', 'Bilal'];

checkUsernameAvailability(currentUsers, newUsers);

// question 33

function getOrdinalEnding(number: number): string {
  if (number === 1) {
    return 'st';
  } else if (number === 2) {
    return 'nd';
  } else if (number === 3) {
    return 'rd';
  } else {
    return 'th';
  }
}

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of numbers) {
  const ordinalEnding = getOrdinalEnding(number);
  console.log(`${number}${ordinalEnding}`);
}

// question 34

const favoritePizzas: string[] = ['Pepperoni', 'Mali Boti', 'BBQ Chicken'];

for (const pizza of favoritePizzas) {
  console.log(`I like ${pizza} pizza.`);
}

console.log("I really love pizza!");

// question 35

const animals: string[] = ['Dog', 'Cat', 'Rabbit'];

for (const animal of animals) {
  console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

console.log("Any of these animals would make a great pet!");

// question 36

function make_shirt(size: string, message: string) {
  console.log(`The shirt size is ${size} and it has the message: "${message}".`);
}

// Call the function
make_shirt('Medium', 'I love TypeScript!');

// question 37

function make_shirt(size: string = 'Large', message: string = 'I love TypeScript') {
  console.log(`The shirt size is ${size} and it has the message: "${message}".`);
}

// Call the function with default values
make_shirt(); // Large shirt with default message

// Call the function with medium size and default message
make_shirt('Medium');

// Call the function with custom size and message
make_shirt('Small', 'Hello, World!');

// question 38

function describe_city(city: string, country: string = 'Unknown') {
  console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city('Karachi', 'Pakistan');
describe_city('New York', 'United States');
describe_city('Ankara'); // Country parameter will default to 'Unknown'

// question 39

function city_country(city: string, country: string): string {
  return `${city}, ${country}`;
}

// Call the function with three city-country pairs
const location1 = city_country('Lahore', 'Pakistan');
const location2 = city_country('Paris', 'France');
const location3 = city_country('Tokyo', 'Japan');

console.log(location1);
console.log(location2);
console.log(location3);

// question 40

function make_album(artist: string, title: string, tracks?: number): Record<string, any> {
  const album: Record<string, any> = {
    artist: artist,
    title: title,
  };

  if (tracks !== undefined) {
    album.tracks = tracks;
  }

  return album;
}

// Call the function to create three different album objects
const album1 = make_album('Atif Asalm', '21');
const album2 = make_album('Abida Parveen', '÷ (Divide)', 16);
const album3 = make_album('Mehdi Hassan', '1989');

console.log(album1);
console.log(album2);
console.log(album3);

// question 41

function show_magicians(magicians: string[]) {
  for (const magician of magicians) {
    console.log(magician);
  }
}

// Create an array of magician's names
const magicians: string[] = ['Asad', 'Hanif', 'Naseer', 'Zameer'];

// Call the function with the array of magician's names
show_magicians(magicians);

// question 42

function show_magicians(magicians: string[]) {
  for (const magician of magicians) {
    console.log(magician);
  }
}

function make_great(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = `the Great ${magicians[i]}`;
  }
}

// Create an array of magician's names
const magicians: string[] = ['Aslam', 'Shabir', 'Asghar', 'Hayat'];

// Call the make_great() function to modify the array
make_great(magicians);

// Call the show_magicians() function to see the modified list
show_magicians(magicians);

// question 43

function show_magicians(magicians: string[]) {
  for (const magician of magicians) {
    console.log(magician);
  }
}

function make_great(magicians: string[]): string[] {
  const greatMagicians: string[] = [];
  for (const magician of magicians) {
    greatMagicians.push(`the Great ${magician}`);
  }
  return greatMagicians;
}

// Create an array of magician's names
const magicians: string[] = ['Asalm', 'Shabir', 'Asghar', 'Hayat'];

// Create a copy of the magicians array and call make_great() with the copy
const greatMagicians: string[] = make_great(magicians.slice());

// Call the show_magicians() function with the original and modified arrays
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nModified Magicians:");
show_magicians(greatMagicians);

// question 44

function make_sandwich(...items: string[]) {
  console.log("You ordered a sandwich with the following items:");
  for (const item of items) {
    console.log("- " + item);
  }
  console.log("Enjoy your sandwich!");
}

// Call the function with three different sets of sandwich items
make_sandwich('Ham', 'Cheese');
make_sandwich('Turkey', 'Lettuce', 'Tomato', 'Mayonnaise');
make_sandwich('Peanut Butter', 'Jelly');

// // question 45
// function store_car_info(manufacturer: string, model: string, ...kwargs: any): Record<string, any> {
//     const car: Record<string, any> = {
//       manufacturer,
//       model,
//     };
  
//     for (const key in kwargs) {
//       car[key] = kwargs[key];
//     }
  
//     return car;
//   }
  
//   // Call the function with required information and additional name-value pairs
//   const carInfo = store_car_info('Toyota', 'Camry', color: 'Silver', optionalFeature: 'Sunroof');
  
//   console.log(carInfo);
  