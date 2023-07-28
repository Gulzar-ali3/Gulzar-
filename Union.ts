//In TypeScript, a union type allows a variable or parameter to hold values of multiple types. It is denoted using the pipe | symbol between the types. When a union type is used, the variable can be assigned values that match any of the specified types

let score: number | string ;
score = 34;
console.log(`You're Score is : ${score},`+ typeof score);
score = `34`;
console.log(`You're Score is :${score},`+ typeof score);

type User ={
    name: string;
     id: number;
   }
type Admin = {
    UserName: string;
    id : number;
}

let gulzar: User | Admin = {name:"Ahmed", id:224};
console.log(gulzar);

gulzar = {UserName:"Asad" , id:123};
console.log(gulzar);

//function 

function  disp(name:string|string[]){
    if (typeof name === "string"){
        console.log(name)
    } else{
        let i; 
        for( i = 0 ; i<name.length ; i ++){
            console.log(name[i])
        }
    }
}
disp("gulzar");
console.log("Printing name's array....");
disp([`Ahmed` , `Bila` , `Naseer`]);

// array

let arr:number[] | string[];
let i:number;

arr = [ 1 , 2 , 3];
console.log("**Numeric Array**");
for( i = 0 ; i<arr.length ; i++){
    console.log(arr[i]);
}
arr = ["Mumbai","Pune","Delhi"] 
console.log("**string array**")  

for(i = 0;i<arr.length;i++) { 
   console.log(arr[i]) 
} 
