//let multiply = function(a, b) {
  //  console.log(a * b);
//}

let multiply = function(a) {
    return function(b) {
        console.log(a * b);
    }
}

let multiplyByTwo = multiply(2); // here 2 refers to a value
multiplyByTwo(10); // here 10 refers to 'b' value

