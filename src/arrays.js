export var alunos = ["luizinho", "uguinho", "zezinho"];
export function createList() {
  return (
    "<ul>" +
    alunos
      .map((umAlunoOriginal) => umAlunoOriginal.toUpperCase()) //["LUIZINHO", "UGUINHO", "ZEZINHO", "FULANINHO"]
      .filter((umAluno) => !umAluno.startsWith("Z")) //["LUIZINHO", "UGUINHO","FULANINHO"]
      .map((umAlunoFiltrado) => `<li>${umAlunoFiltrado}</li>`) //["<li>LUIZINHO</li>", "<li>UGUINHO</li>","<li>FULANINHO</li>"]
      .reduce((acc, umAlunoLi) => {
        return acc.concat(umAlunoLi);
      }) + // <li>LUIZINHO</li><li>UGUINHO</li><li>FULANINHO</li>
    "</ul>"
  );
}
