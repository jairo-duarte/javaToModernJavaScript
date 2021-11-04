import createList, * as arraysMod from "./arrays"; //import do default, e do restante com nameSpace
import "./styles.css";

console.debug("index.js started...");

var app = document.getElementById("app");
app.innerHTML = `
<h3>!Hello Vanilla!</h3>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>

`;

if (!arraysMod.alunos.includes("fulaninho")) {
  arraysMod.alunos.push("fulaninho");
}
document.getElementsByClassName("arraysExample")[0].innerHTML = createList(); // arraysMod.default()
