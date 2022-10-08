// Decorators in general are all about classes

function Logger(target: Function) {
    console.log('Loggin...');
    console.log(target);
}

function WithTemplate(template: string, hookId: string) {
    return function(constructor: any){
        const hookEl = document.getElementById(hookId);
        const p = new constructor();

        if(hookEl){
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.innerHTML = p.name;
        }
    }
}

// @Logger
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    name =  "Ismail";
    age = 20;

    constructor(){
        console.log(this.name + ' is ' + this.age + ' years old.');
    }
}

//A decorator factory returns a decorator function
//A decorator factory allows you to configure decorator functions when u assign it as a decorator to something.
function decoratorFactory(text: string){
    return function(target: Function){
        console.log(text);
        console.log(target);
    }
}

@decoratorFactory("Logging - Employee")
class Employee extends Person {
    job: string;

    constructor(job: string){
        super();
        this.job = job;
    }
}

const engineer = new Employee("Engineer");
console.log(engineer);

// ---
class Product {
    title: string;
    private _price: number;


    constructor(title: string, price: number){
        this.title = title;
        this._price = price;
    }

    set price(value: number) {
        value > 0 ? this._price = value : new Error("Price must be greater than zero");
    }

    getPriceWithTax(tax: number): number {
        return this._price * (1 + tax);
    }
}