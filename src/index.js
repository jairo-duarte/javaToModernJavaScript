import "./styles.css";
import createList, { alunos } from "./arrays";

console.debug("index.js started...");
asdas
var app = document.getElementById("app");
app.innerHTML = `
<h3>!Hello Vanilla!</h3>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>

`;

if (!alunos.includes("fulaninho")) {
  alunos.push("fulaninho2");
}
document.getElementsByClassName("arraysExample")[0].innerHTML = createList();
