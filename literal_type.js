var CurrentStatus;
CurrentStatus = "Active";
console.log(CurrentStatus);
CurrentStatus = "Inactive";
console.warn(CurrentStatus);
CurrentStatus = "Pending";
console.log(CurrentStatus);
var userScore;
userScore = 3; // Valid
userScore = 5; // Valid
console.log(userScore);
var hasPermission;
hasPermission = true; // Valid
hasPermission = false; // Valid
var name;
name = "John"; // Valid
name = null; // Valid
name = undefined; // Valid
// name = 42;      // Error: Type '42' is not assignable to type 'NullableString'.
