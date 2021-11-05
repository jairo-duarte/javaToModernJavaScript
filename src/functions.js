console.group("functions.js started.");

//classic();
//classic funcion
function classic() {
  console.log("classic called");
}

//annonymousFunc(); // hoisting não se aplica, mesmo sendo var
// annonymous function
var annonymousFunc = function () {
  console.log("regular called");
};
annonymousFunc = function () {
  console.log("regular called 2.");
};

// arrow function
const arrowFunc = () => {
  console.log("arrowFunc called");
};
// parameters
const arrowFuncParams = (firstName, lastName) => {
  return firstName + " " + lastName;
};
// simplificação, para um parametro. Mas é uma má pratica remover ().
//const singleParamFunc = firstName => {
//  return firstName;
//};

// super simples
const superSmall = () => /* no log */ "hello there..";

//functions are first class citzen, dont do this crap, adding a property to a function object
superSmall.extraprop = "hidden  crasy prop";
console.log(`extrapop=${superSmall.extraprop}`);

//HOF Higher Order Function.
const add = (x) => (y) => x + y;
//usando uma sintaxe menos densa. Mais clara de entender o inicio e fim de cada parte
//const add = (x) =>{return (y) =>{return x + y}};
console.log("add=" + add(1)(3));
//mesmo HOF add, mas de forma ainda mais clara
function add2(x) {
  x = x * 2; // esta alteração de x é acessível a add3
  function add3(y) {
    return x + y;
  }
  function sub(y) {
    return x - y;
  }

  if (x < 10) return add3;
  else return sub;
}
// nameLessFunction uma constante que vai receber a ref de uma função
const nameLessFunction = add2(3);
// notem que nameLessFunction recebe y=3 como parametro, o acesso a x=1 é dado pelo seu escopo
console.log("nameLessFunction=" + nameLessFunction(1));

//CallBack , assim como variáveis, a ref. de uma função pode ser passada como parametro
const conc = (a, b) => a + "-" + b;
// a palavra 'conc' representa o código e escopo da função. Adicionando (), como em 'conc()', temos o resultado da execução desta função juntamente com seu escopo
const executeOnlyWhenNeeded = (condition, callback, ...args) => {
  if (condition) return callback(...args);
  else return "nop";
};
console.log(executeOnlyWhenNeeded(true, conc, "R", "J"));

console.groupEnd();
