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

// same Ref, objetos são passados como referência
let developerCopy = developer;
developerCopy.firstName = "john second";
console.log("same Ref developer=" + developer.firstName);

// tipos primitivos, passagem por valor
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

//Serialização/Deserialização, uma forma de 'cópia'
const developerSerialized = JSON.stringify(developerCopy);
console.log("serialized developer " + developerSerialized);
const developerTeleTransported = JSON.parse(developerSerialized);
console.log(
  "developerTeleTransported has sayHi function ?=" +
    (developerTeleTransported.sayHi === undefined
      ? "desconhecido"
      : "existe sim")
);

// Destructuring function parameters, default value, rename
function greetings({ name: renamed, period = "afternoon" }) {
  console.log(`${renamed} says: good ${period}`);
}

const introduction = {
  name: "ozzy",
  period: "night",
  algumaCoisaAMais: false
};
greetings(introduction);

console.groupEnd();
