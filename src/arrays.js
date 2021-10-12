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
