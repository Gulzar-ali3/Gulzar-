type Status = "Active" | "Inactive" | "Pending" ;

let CurrentStatus:Status;
CurrentStatus = "Active";
console.log(CurrentStatus);
CurrentStatus = "Inactive";
console.warn(CurrentStatus);
CurrentStatus = "Pending";  
console.log(CurrentStatus);

type Score = 0 | 1 | 2 | 3 | 4 | 5;
let userScore: Score;
userScore = 3; // Valid
userScore = 5; // Valid
console.log(userScore);

type Choice = true | false;
let hasPermission: Choice;
hasPermission = true;  // Valid
hasPermission = false; // Valid
// hasPermission = 0;     // Error: Type '0' is not assignable to type 'Choice'.

type NullableString = string | null | undefined;
let name: NullableString;
name = "John";  // Valid
name = null;    // Valid
name = undefined; // Valid
// name = 42;      // Error: Type '42' is not assignable to type 'NullableString'.
