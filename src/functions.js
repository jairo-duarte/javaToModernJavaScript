//classic()
//classic funcion
function classic() {
  console.log("classic called");
}

//regular()
// annonymous function
const regular = function () {
  console.log("regular called");
};
// arrow function
const arrowFunc = () => {
  console.log("arrowFunc called");
};
// parameters
const arrowFuncParams = (firstName, lastName) => {
  console.log("arrowFuncParams called");
  return firstName + " " + lastName;
};
// simplification
const singleParamFunc = (firstName) => {
  console.log("singleParamFunc called");
  return firstName;
};
// super simple
const superSmall = () => /* no log */ "hello there.";

//HOF
const add = (x) => (y) => x + y;
console.log(add(1)(3));

//CallBack
const conc = (a, b) => a + "" + b;
const executeOnlyWhenNeeded = (condition, callback, ...args) => {
  if (condition) return callback(...args);
  else return "nop";
};
console.log(executeOnlyWhenNeeded(true, conc, "R", "J"));
