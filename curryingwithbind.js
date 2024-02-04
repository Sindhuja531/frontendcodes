let multiply = function(a, b) {
    console.log(a * b);
}

let multiplyByTwo = multiply.bind(this, 2); // this refers to multiply menthod and 2 refers to a value
multiplyByTwo(10); // here 10 refers to 'b' value

let multiplyByThree = multiply.bind(this, 4); // this refers to multiply menthod and 4 refers to a value
multiplyByThree(6); // here 6 refers to 'b' value

let multiplyByFour = multiply.bind(this, 2, 4); // this refers to multiply menthod and 2 refers to a value, 4 refers to b value
multiplyByFour(10); // here 10 value is ignored as b value is declared above

