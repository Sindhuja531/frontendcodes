let name = {
    firstname: "Sindhuja",
    lastname: "Pulumati"
}

let printName = function () {
    console.log(this.firstname +" " + this.lastname);
}

let printMyName = printName.bind(name);
printMyName();

