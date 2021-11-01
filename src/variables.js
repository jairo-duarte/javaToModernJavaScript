console.group("variables");

// test declarado com uma função tradicional, o que permite a invocar antes da sua 'declaração
test("primeiro"); // nesta execução, o name e nameGlobal serão undefined
nameGlobal = "init"; // é possível usar var antes de declarar (Hoisting)
console.debug("valor de nameGlobal no escopo raiz=" + nameGlobal);
//nuncaDeclarado = "outro init"; mas se nunca for declarado, a execução será suspensa por erro

const name = "John Doe";
var nameGlobal = "John Doe Global";
let age = 30;
let occupation = "Software Developer";

test("segundo"); // mas nesta execução, o name vai ter o valor de 'John Doe'

//let occupation = "Software Developer"; // não pode redeclarar const e let no mesmo escopo

function test(where = "default where") {
  var age = 40; // permite redeclar em novo escopo
  var age = 45; // mas o var, até no mesmo no mesmo escopo
  var ageOfMarriage = 20; // var, pode ser global, mas não vaza do escopo desta função
  var ageOfFirstBorn = 10;
  let occupation = "Software Tester"; // em escopos diferentes, redeclarar uma variável é permitido

  console.log(
    "where=" + where,
    "name=" +
      (typeof name ===
      "undefined" /* for segura de testar existencia de uma var*/
        ? "NA"
        : name) /* name é uma const, será acesspivel depois declarado, mas nameGlobal é um var */,
    "nameGlobal=" + nameGlobal,
    "age=" + age,
    "occup=" + occupation,
    "ageOfMarriage=" + ageOfMarriage
  );
  // esta função usa informações declaradas fora de seu contexto/espoco, evitem isso.
  // demonstrado aqui apenas para testes de escopos.
}

// here, ageOfFirstBorn is undefined

if (true) {
  var ageOfFirstBorn = 15; // var é global, e vai persistir alêm deste escopo de bloco do if
  let ageOfMarriage = 25; // let não vai escapar
}
console.log("age=" + age);

console.log("ageOfFirstBorn=" + ageOfFirstBorn); //funciona, var é global
//console.log("ageOfMarriage=" + ageOfMarriage); //não func, pois foi declarado como let, que fica preso ao seu escopo

console.groupEnd();
