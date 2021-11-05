console.group("arrays.js started.");

const alunosInterno = ["luizinho", "uguinho", "zezinho"];
export { alunosInterno as alunos };

// uso de callbacks em arrays, map/filter/reduce
export default function createList(pref = "sr") {
  return (
    "<ul>" +
    alunosInterno
      .map((umAlunoOriginal) => umAlunoOriginal.toUpperCase()) //["LUIZINHO", "UGUINHO", "ZEZINHO", "FULANINHO"]
      .filter((umAluno) => !umAluno.startsWith("Z")) //["LUIZINHO", "UGUINHO","FULANINHO"]
      .map((umAlunoFiltrado) => `<li>${pref} ${umAlunoFiltrado}</li>`) //["<li>LUIZINHO</li>", "<li>UGUINHO</li>","<li>FULANINHO</li>"]
      .reduce((acc, umAlunoLi) => {
        return acc + umAlunoLi;
      }) + // <li>LUIZINHO</li><li>UGUINHO</li><li>FULANINHO</li>
    "</ul>"
  );
}

console.log(
  "reduce" +
    [1, 10, 100].reduce((acc, item) => {
      console.log(`inter acc=${acc} item=${item}`);
      return acc + item;
    })
);

//Arrays
let numbers = [1, 2, 3, 4, 5];
//get first and second
var [one, two] = numbers; // one = 1, two = 2
// third is ignored
var [one, two, , four] = numbers; // one = 1, two = 2, four = 4
//rest
var [one, ...rest] = numbers; // one = 1 , rest = [2,3,4,5]

//append
numbers = [...numbers, 6]; // [1, 2, 3, 4, 5, 6]
var numbers2 = [0, ...numbers, 7]; // [0, 1, 2, 3, 4, 5, 6, 7]
console.log("numbers==" + numbers);
console.log("numbers2=" + numbers2);

console.groupEnd();
