//Different string operations in JavaScript (auxiliary helping methods/functions)

function getLength(str) {
    return str.length;
}

// let a = "ashish";
// let length = getLength(a);
// console.log(length);

function findIndexOf(str, target) {
    console.log("original string : ", str);
    console.log("index : " , str.indexOf(target));
}

// findIndexOf("ashish", "sh");

function getSlice(str, start, end) {
    console.log("original string : ", str);
    console.log("sliced string : ", str.slice(start, end));
    
}

// getSlice("ashish", 5, 0);


//replace
// const str = "hello world";
// console.log(str.replace("world", "javascript"));


//split

const value = "my name is ashish "
//console.log(value.split(" "));  here the string is splited on the basis of what we give in the bracketts
//split the string into an array given a delimetor

const name = "         Ashish           ";
//console.log(name.trim());  trim removes all the extra spaces in the string


const lower = "ajajshakus"
//console.log(lower.toUpperCase());

const upper = "ASOHUWKWSJWNDIH";
//console.log(upper.toLowerCase());


//NUMBERS

//parseInt -- this is a global function that will convert a string into  an integer whenever it is passed

let a = "243.223";
//console.log(parseInt(a)); //output - 243
//console.log(typeof (parseInt(a))); //gives output as number

//similarly there is parseFloat -- this works similar but converts into a float 

let c = "243.2423";
//console.log(parseFloat(c)); //output - 243.2423
//console.log(typeof parseFloat(c));


//ARRAY


//push
const initialArray = [1, 2, 3, 4, 5, 6];
initialArray.push(7);
//console.log(initialArray);

//pop
initialArray.pop();
//console.log(initialArray);

//shift - removes one from the front
initialArray.shift();
//console.log(initialArray);

//unshift - add value in the front
initialArray.unshift(1);
//console.log(initialArray);


//merging two arrays
let secondArray = [10, 11, 12];
//console.log(initialArray.concat(secondArray));

//log 
function print(str) {
    //console.log(str);
    
}
//console.log(initialArray.forEach(print));

//forEach function uses a different callback function to do its job like here we call print function which gives the output...this function automatically iterates through the array and then give us the result... so its better to use this instead of writing a for loop



//CLASS

class Animal{
    constructor(name, legs, color) {
        this.name = name;
        this.legs = legs;
        this.color = color;
    }
    speak() {
        console.log(`${this.name} makes noise`);
        
    }
}

let dog = new Animal("dog", 4, "yellow");
//dog.speak();



//DATE

// let currentDate = new Date();
// console.log(currentDate.getDate());

function dateMethods() {
  const currentDate = new Date();
  //console.log("Current Date:", currentDate);

  // Getting various components of the date
  //console.log("Date:", currentDate.getDate());
  //console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
  //console.log("Year:", currentDate.getFullYear());
  //console.log("Hours:", currentDate.getHours());
  //console.log("Minutes:", currentDate.getMinutes());
  //console.log("Seconds:", currentDate.getSeconds());

  // Setting components of the date
  currentDate.setFullYear(2022);
  //console.log("After setFullYear:", currentDate);

  currentDate.setMonth(5); // Setting month to June (zero-indexed)
  //console.log("After setMonth:", currentDate);

  // Getting and setting time in milliseconds since 1970
  //console.log("Time in milliseconds since 1970:", currentDate.getTime());

  const newDate = new Date(2023, 8, 15); // Creating a new date
  //console.log("New Date:", newDate);
}

// Example Usage for Date Methods
dateMethods();


//JSON

function jsonMethods(jsonString) {
  console.log("Original JSON String:", jsonString);

  // Parsing JSON string to JavaScript object
  let parsedObject = JSON.parse(jsonString);
  console.log("After JSON.parse():", parsedObject);

  // Stringifying JavaScript object to JSON string
  let jsonStringified = JSON.stringify(parsedObject);
  console.log("After JSON.stringify():", jsonStringified);
}

// Example Usage for JSON Methods
const sampleJSONString =
  '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

jsonMethods(sampleJSONString);


//MATHS

function mathMethods(value) {
  console.log("Original Value:", value);

  let rounded = Math.round(value);
  console.log("After round():", rounded);

  let ceiling = Math.ceil(value);
  console.log("After ceil():", ceiling);

  let flooring = Math.floor(value);
  console.log("After floor():", flooring);

  let randomValue = Math.random();
  console.log("After random():", randomValue);

  let maxValue = Math.max(5, 10, 15);
  console.log("After max():", maxValue);

  let minValue = Math.min(5, 10, 15);
  console.log("After min():", minValue);

  let powerOfTwo = Math.pow(value, 2);
  console.log("After pow():", powerOfTwo);

  let squareRoot = Math.sqrt(value);
  console.log("After sqrt():", squareRoot);
}

// Example Usage for Math Methods
mathMethods(4.56);
mathMethods(9);
mathMethods(25);


//OBJECTS

// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);

  let keys = Object.keys(obj);
  console.log("After Object.keys():", keys);

  let values = Object.values(obj);
  console.log("After Object.values():", values);

  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries);

  let hasProp = obj.hasOwnProperty("property");
  console.log("After hasOwnProperty():", hasProp);

  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj);


}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);
