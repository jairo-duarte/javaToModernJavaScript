export var alunos = ["luizinho", "uguinho", "zezinho"];
export function createList() {
  return (
    "<ul>" +
    alunos
      .map((umAlunoOriginal) => umAlunoOriginal.toUpperCase())
      .filter((umAluno) => !umAluno.startsWith("Z"))
      .map((umAlunoFiltrado) => `<li>${umAlunoFiltrado}</li>`)
      .reduce((acc, umAlunoLi) => {
        return acc.concat(umAlunoLi);
      }) +
    "</ul>"
  );
}
