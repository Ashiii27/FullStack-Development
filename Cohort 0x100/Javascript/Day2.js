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

findIndexOf("ashish", "sh");