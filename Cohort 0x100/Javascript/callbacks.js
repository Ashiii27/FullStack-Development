function square(n) {
    return n * n;
}

function cube(n) {
    return n * n * n;
}

function quad(n) {
    return n * n * n * n;
}

function sumOfAnything(a, b, callBackFn) {
    let ans1 = callBackFn(a);
    let ans2 = callBackFn(b);
    return ans1 + ans2;
}

let answer = sumOfAnything(82, 4, quad)
console.log(answer);
