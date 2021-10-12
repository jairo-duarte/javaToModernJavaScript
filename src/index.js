import "./styles.css";
import { createList, alunos } from "./arrays";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!!!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

if (!alunos.includes("fulaninho")) {
  alunos.push("fulaninho");
}
document.getElementsByClassName("arraysExample")[0].innerHTML = createList();

let developer = {
  firstName: "john original",
  lastName: "doe",
  age: 25,
  sayHi: function oi() {
    return `${this.firstName} ${this.lastName}, says hi`;
  },
  //sayHi: () =>{("Hi" + `${this.firstName} ${this.lastName}`)},
  sayHi2: () => "Hi" + `${firstName} ${last}`
};

//destructure developer object
const { firstName, lastName: last } = developer;
console.log(firstName + last);

// same Ref
let developerCopy = developer;
developer.firstName = "john second";
console.log("developerCopy=" + developerCopy.firstName);

// Real copy
developerCopy = { ...developer };
developer.firstName = "john third";
console.log("developerCopy=" + developerCopy.firstName);
// Copy event functions
console.log("copy said=" + developerCopy.sayHi());

//Copy, but with overrides
developerCopy = { ...developer, lastName: "cena" };

//Strange, but usefull way of 'cloning'.
const developerSerialized = JSON.stringify(developerCopy);
console.log("serialized developer " + developerSerialized);
const developerTeleTransported = JSON.parse(developerSerialized);
console.log(
  "developerTeleTransported has sayHi function ?=" +
    developerTeleTransported.sayHi ===
    undefined
    ? "yes"
    : "no"
);

// Destructuring function parameters
function greetings({ name, period = "afternoon" }) {
  console.log(`${name} says: good ${period}`);
}
const introduction = { name: "ozzy", period: "night" };
greetings(introduction);

//Arrays
let numbers = [1, 2, 3, 4, 5];
//get first and second
var [one, two] = numbers; // one = 1, two = 2
// third is ignored
var [one, two, , four] = numbers; // one = 1, two = 2, four = 4
//rest
var [one, ...rest] = numbers; // one = 1 , rest = [2,3,4,5]

//append
numbers = [...numbers, 6];
