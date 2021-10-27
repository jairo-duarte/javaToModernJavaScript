console.group("variables");

test("primeiro");

const name = "John Doe";
var nameGlobal = "John Doe Global";
let age = 30;
let occupation = "Software Developer";

test();

//let occupation = "Software Developer"; // não pode redeclarar const e let no mesmo escopo


function test(where = "somewhere") {
  var age = 40; // var, permite redeclar em escopo diferente
  var age = 45; // até no mesmo no mesmo escopo
  var ageOfMarriage = 20; // var, pode ser global, mas não vaza do escopo desta função
  var ageOfFirstBorn = 10;
  let occupation = "Software Tester";

  console.log(
    "where=" + where,
    "name=" + (typeof name2 === 'undefined')?nameGlobal:name, /* name is a const, wont be visible here, but nameGlobal is declared with var, thus will be visible */
    "age=" + age,
    "occup=" + occupation,
    "ageOfMarriage=" + ageOfMarriage
  );
}

// here, ageOfFirstBorn is undefined

if (true) {
  var ageOfFirstBorn = 15; // var é global, e vai escapar deste escopo em bloco, caso do if
  let ageOfMarriage = 25; // let não vai
}
console.log("age=" + age);

console.log("ageOfFirstBorn=" + ageOfFirstBorn); //works, var is global
//console.log('ageOfMarriage=' + ageOfMarriage );  //doesnt, let is local to it´s scope


console.groupEnd();
