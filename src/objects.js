console.group("objects.js started.");

let developer = {
  firstName: "john original",
  lastName: "doe",
  age: 25,
  address: { state: "RJ", city: "Rio de Janeiro" },
  sayHi: function oi() {
    return `${this.firstName} ${this.lastName}, says hi`;
  },
  //sayHi: () =>{("Hi" + `${this.firstName} ${this.lastName}`)},
  sayHi2: () => "Hi" + `${firstName} ${last}`
};

//destructure developer object
const { firstName, lastName: last } = developer;
console.log("after destruct " + firstName + last);

// same Ref
let developerCopy = developer;
developerCopy.firstName = "john second";
console.log("same Ref developer=" + developer.firstName);

let intA,
  intB = 10;
intA = 20;
console.log(`a=${intA} e b=${intB}`);

// Real copy
developerCopy = { ...developer };
developer.firstName = "john third";
console.log("developerCopy=" + developerCopy.firstName);
// Copy event functions
console.log("copy said=" + developerCopy.sayHi());

//Copy, but with overrides
developerCopy = { ...developer, lastName: "cena" };

//Convoluted, but usefull way of 'cloning'.
const developerSerialized = JSON.stringify(developerCopy);
console.log("serialized developer " + developerSerialized);
const developerTeleTransported = JSON.parse(developerSerialized);
console.log(
  "developerTeleTransported has sayHi function ?=" +
    (developerTeleTransported.sayHi === undefined
      ? "desconhecido"
      : "existe sim")
);

// Destructuring function parameters
function greetings({ name, period = "afternoon" }) {
  console.log(`${name} says: good ${period}`);
}
const introduction = {
  name: "ozzy",
  period: "night",
  algumacoisaestranha: false
};
greetings(introduction);


console.groupEnd();