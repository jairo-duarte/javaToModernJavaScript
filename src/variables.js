console.group("variables");

test("primeiro"); // nesta execução, o name vai aparecer com undefined

const name = "John Doe";
var nameGlobal = "John Doe Global";
let age = 30;
let occupation = "Software Developer";

test(); // mas nesta execução, o name vai ter o valor de 'John Doe'

//let occupation = "Software Developer"; // não pode redeclarar const e let no mesmo escopo


function test(where = "somewhere") {
  var age = 40; // permite redeclar em novo escopo
  var age = 45; // mas o var, até no mesmo no mesmo escopo
  var ageOfMarriage = 20; // var, pode ser global, mas não vaza do escopo desta função
  var ageOfFirstBorn = 10;
  let occupation = "Software Tester"; // em escopos diferentes, redeclarar uma variável é permitido

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
