class Departement {
  private employees: string[] = [];

  constructor(private readonly id: string | number, public name: string){

  }

  describe(this: Departement){
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string){
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

interface Named{
  readonly name: string;
  username?: string;
}

const user: Named = {
  name: "John",
  username: "_John"
}

console.log(user.name);

type combinable = number | string;

//Function overloading
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: combinable, b: combinable) {
  if (typeof a === "string" || typeof b === "string"){
    return a.toString() + ' ' + b.toString();
  }
  return a + b;
}

const result = add("I", "am");
result.split(' ')

//Nulish coalescing
const userInput = '';
const storedData = userInput ?? 'DEFAULT';
console.log(storedData); 


//Generics
const names: Array<string> = []; //string[]

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is done!');
  }, 2000)
})

promise.then(data => {
  data.split(' '); //would return an error if the promise held a number type.
})

function merge<T extends object, U extends object>(objA: T, objB: U){
  return Object.assign(objA, objB);
}

const mergeObj = merge({name: 'Ismail'}, {age: 30});
console.log(mergeObj.name); 