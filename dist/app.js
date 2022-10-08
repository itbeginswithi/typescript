"use strict";
class Departement {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    getEmployees() {
        return this.employees;
    }
}
const department = new Departement(1, 'Law');
department.addEmployee('Max');
department.addEmployee('Anna');
console.log(department.getEmployees()[0]);
department.describe();
console.log(department);
const user = {
    name: "John",
    username: "_John"
};
console.log(user.name);
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + ' ' + b.toString();
    }
    return a + b;
}
const result = add("I", "am");
result.split(' ');
const userInput = '';
const storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storedData);
const names = [];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done!');
    }, 2000);
});
promise.then(data => {
    data.split(' ');
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: 'Ismail' }, { age: 30 });
console.log(mergeObj.name);
