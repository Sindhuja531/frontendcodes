// functional programming higher order functions
//map is also a higher order functions
const r = [2, 3, 1, 5];

const area = function(radius) {
    return Math.PI * r * r;
}

const circumference = function(r) {
    return 2 * Math.PI * r;
}

const diameter = function (r) {
    return 2 * r;
}

const calculate = function (radius, logic) {
    const output = []
    for(let i=0;i<r.length;i++) {
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(r.map(area));
console.log(calculate(r, area));
console.log(calculate(r, circumference));
console.log(calculate(r, diameter));

//map and calculate works as same way
