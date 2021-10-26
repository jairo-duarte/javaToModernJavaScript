console.debug("arrays.js started.");

const alunosInterno = ["luizinho", "uguinho", "zezinho"];
export { alunosInterno as alunos };

export default function createList(pref = "sr") {
  return (
    "<ul>" +
    alunosInterno
      .map((umAlunoOriginal) => umAlunoOriginal.toUpperCase()) //["LUIZINHO", "UGUINHO", "ZEZINHO", "FULANINHO"]
      .filter((umAluno) => !umAluno.startsWith("Z")) //["LUIZINHO", "UGUINHO","FULANINHO"]
      .map((umAlunoFiltrado) => `<li>${pref} ${umAlunoFiltrado}</li>`) //["<li>LUIZINHO</li>", "<li>UGUINHO</li>","<li>FULANINHO</li>"]
      .reduce((acc, umAlunoLi) => {
        return acc.concat(umAlunoLi);
      }) + // <li>LUIZINHO</li><li>UGUINHO</li><li>FULANINHO</li>
    "</ul>"
  );
}

//Arrays
let numbers = [1, 2, 3, 4, 5];
//get first and second
var [one, two] = numbers; // one = 1, two = 2
// third is ignored
var [one, two, , four] = numbers; // one = 1, two = 2, four = 4
//rest
var [one, ...rest] = numbers; // one = 1 , rest = [2,3,4,5]

//append
let numbers2 = [...numbers, 6];
console.log("numbers=" + numbers);
console.log("numbers2=" + numbers2);
