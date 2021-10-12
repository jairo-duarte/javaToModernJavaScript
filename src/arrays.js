export var alunos = ["luizinho", "uguinho", "zezinho"];
export function createList() {
  return (
    "<ul>" +
    alunos
      .filter((umAluno) => !umAluno.startsWith("z"))
      .map((umAlunoFiltrado) => `<li>${umAlunoFiltrado}</li>`)
      .reduce((acc, umAlunoLi) => {
        return acc.concat(umAlunoLi);
      }) +
    "</ul>"
  );
}
