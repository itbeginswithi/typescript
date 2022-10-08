"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(target) {
    console.log('Loggin...');
    console.log(target);
}
function WithTemplate(template, hookId) {
    return function (constructor) {
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1').innerHTML = p.name;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = "Ismail";
        this.age = 20;
        console.log(this.name + ' is ' + this.age + ' years old.');
    }
};
Person = __decorate([
    WithTemplate('<h1>My Person Object</h1>', 'app')
], Person);
function decoratorFactory(text) {
    return function (target) {
        console.log(text);
        console.log(target);
    };
}
let Employee = class Employee extends Person {
    constructor(job) {
        super();
        this.job = job;
    }
};
Employee = __decorate([
    decoratorFactory("Logging - Employee")
], Employee);
const engineer = new Employee("Engineer");
console.log(engineer);
class Product {
    constructor(title, price) {
        this.title = title;
        this._price = price;
    }
    set price(value) {
        value > 0 ? this._price = value : new Error("Price must be greater than zero");
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
