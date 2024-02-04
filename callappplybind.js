let n = {
    firstname: "Sindhuja",
    lastname: "Pulumati",
}

let printFullName = function(hometown, state) {
    console.log(this.firstname + " " + this.lastname + " from " + hometown + " , " + state);
}

printFullName.call(n, "Warangal", "Telangana");


let n2 = {
    firstname: "Pranay",
    lastname: "Yamsani",
}
// function borrowing
printFullName.call(n2, "Hyderabad", "Telangana");

printFullName.apply(n2, ["Hyderabad", "Telangana"]);

//bind method
let printMyName = printFullName.bind(n, "Warangal", "Telangana");
console.log(printMyName);
printMyName(); 