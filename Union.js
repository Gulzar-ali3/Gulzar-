//In TypeScript, a union type allows a variable or parameter to hold values of multiple types. It is denoted using the pipe | symbol between the types. When a union type is used, the variable can be assigned values that match any of the specified types
var score;
score = 34;
console.log("You're Score is : ".concat(score, ",") + typeof score);
score = "34";
console.log("You're Score is :".concat(score, ",") + typeof score);
var gulzar = { name: "Ahmed", id: 224 };
console.log(gulzar);
gulzar = { UserName: "Asad", id: 123 };
console.log(gulzar);
//function 
function disp(name) {
    if (typeof name === "string") {
        console.log(name);
    }
    else {
        var i_1;
        for (i_1 = 0; i_1 < name.length; i_1++) {
            console.log(name[i_1]);
        }
    }
}
disp("gulzar");
console.log("Printing name's array....");
disp(["Ahmed", "Bila", "Naseer"]);
// array
var arr;
var i;
arr = [1, 2, 3];
console.log("**Numeric Array**");
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
arr = ["Mumbai", "Pune", "Delhi"];
console.log("**string array**");
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
