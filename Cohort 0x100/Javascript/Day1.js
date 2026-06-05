// let firstName = "Ashish";
// let age = 20;

// console.log("This person's name is " + firstName + " and their age is " + age);

// if (age > 20) {
//     console.log("This person is eligible to sign up");
//     }
//     else {
//     console.log("Not Eligible");
//     }

// let answer = 0;

// for (i = 0; i <= 100; i++){
//     answer = answer + i;
// }
// console.log(answer);

// let firstName = "Ashish";
// console.log("Hello " + firstName+"\nHow are you ?!");

//Write a program that print only even number in the array

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     console.log(arr[i]);
//   }
// }

//Write a program to print the biggest number in an array

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
//   }

// console.log(max);

//write a program that prints only male peoples names in an complex object

// const personArray = ["Ash", "Rahul", "Priya"];
// const genderArray = ["male", "male", "female"];

// for (let i = 0; i < personArray.length; i++){
//     if (genderArray[i] == "male") {
//         console.log(personArray[i]);
//     }
// }

// const allUsers = [{
//     firstName: "Ash",
//     gender: "male"
// }, {
//     firstName : "Aman",
//     gender : "male"
// }, {
//     firstName : "Priya",
//     gender : "female"
//     }];

// for (let i = 0; i < allUsers.length; i++){
//     if (allUsers[i]["gender"] == "male") {
//         console.log(allUsers[i]["firstName"]);
        
//     }
// }

// function sum(a, b) {
//     return a + b;
// }

// let answer = sum(5, 6);
// console.log(answer);


//Function callback

function sum(num1, num2, fnToCall) {
    let result = num1 + num2;
    fnToCall(result);
}

function displayResult(data) {
    console.log("result of the sum is :" + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

const ans = sum(1, 2, displayResultPassive);
