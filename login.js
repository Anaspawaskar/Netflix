
console.log("anas pawaskar learning java script");
name = "anas pawaskar"
console.log(name);
age = 24
console.log(age,name);

const student = {
    "Name":"anas",
    "age": 20,
    "marks": 7.88,
    "ispass": true
}

console.log(student);


const profile = {
    "username": "anas pawaskar",
    "no_post" : 0,
    "isfollow" : true,
    "following" : 1234,
    "follower" : 45000
}

console.log(profile);

console.log(typeof profile["username"]);

let a = 5
let b = 6
console.log("a && b  =" , a < b && a  == "5" )



// let num1 = 10               // if else statements

// if (num1 % 2 === 0) {
//     console.log("num1 is even number")
// } else (
//     console.log("num1 is odd")
// ) 

// let age1 = 10 ;
// let result = age1 > 18 ? "adult" : "underage";
// console.log(result)

// //MDN docs are doc availabe on chrome to learn more about js

// // alert : is one time popup msg 


// let names = prompt("enter your name")       //prompt is like a input to take from the user 
// console.log(names)


// let number = prompt("enter a number");
// if(number % 5 === 0 ) {
//     console.log( number , " is multiple of 5 ")
// } else(
//     console.log("not a multiple of 5")
// )


let score = prompt("Enter the score");
if(score >= 90 && score <= 100) {
    console.log("you scored 'A' Grade in exam")
} else if(score >= 70 && score <= 89){
    console.log("you scored 'B' Grade in exam")
} else if(score >= 60 && score <= 69){
    console.log("you scored 'C' Grade in exam")
} else if(score >= 50 && score <= 59){
    console.log("you scored '' Grade in exam")
} else if(score >= 0 && score <= 49){
    console.log("you scored 'f' Grade in exam")
}


 