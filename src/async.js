console.group("async");

// so it begins
function cake(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x + " 🎂 ");
    }, 205);
  });
}
console.log("cake promisse then " + cake(""));

cake().then(function (result) {
  return console.log("resultado then " + result);
});

async function msg() {
  const cakeResult = await cake();
  console.log("Message:", cakeResult);
}

msg(); // Message: 🎂 <-- after 205 ms

//-------------------------COMPOSITION----------------------------------------

function the() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("the");
    }, 200);
  });
}

function isLie(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x + "is a lie!");
    }, 100);
  });
}

// old school es6
function concPromisses() {
  the().then((a) =>
    cake(a).then((b) =>
      isLie(b).then((c) => console.log(`concPromisses: ${c}`))
    )
  );
}
concPromisses(); // <-- after 505 ms

// new way
async function compMsg() {
  const a = await the();
  const b = await cake(a);
  const c = await isLie(b);

  console.log(`compMsg: ${c}`);
}
compMsg(); // <-- after after 505 ms

//-----------------------FASTER-------------------------------------------
// parallel
async function parallelMsg() {
  const [a, b, c] = await Promise.all([the(""), cake(""), isLie("")]);
  console.log(`parallelMsg: ${a} ${b} ${c}`);
}

parallelMsg(); // the 🎂 is a lie!  <-- after 205 ms

//------------------------------------------------------------------------

// be carefull, of hidden promise of async keyword
async function hello() {
  return "Hello world!";
}
const b = hello();
console.log("not a string ->" + b); // [object Promise] { ... }
b.then((x) => console.log(x)); // Hello world!

// -------- arrow can use async
const arrowMsg = async () => {
  const msg = await cake();
  console.log("arrowMsg:", msg);
};
arrowMsg();

//---------------------------ERROR HANDLING---------------------------
function caserUpper(val) {
  return new Promise((resolve) => {
    resolve(val.toUpperCase());
  });
}

async function errorMsg(x) {
  try {
    const msg = await caserUpper(x);
    console.log(msg);
  } catch (err) {
    console.error("Ohh no:", err.message);
  }
}

errorMsg("Hello"); // HELLO
errorMsg(34); // Ohh no: val.toUpperCase is not a function

// randonmly generate error
function yayOrNay() {
  return new Promise((resolve, reject) => {
    const val = Math.round(Math.random() * 1); // 0 or 1, at random

    val ? resolve("Lucky!!") : reject("Nope 😠");
  });
}

// using try/catch the same java way
async function luckyMsg() {
  try {
    const msg = await yayOrNay();
    console.debug("luckyMsg=" + msg);
  } catch (err) {
    console.log("luckyMsg com err=" + err);
  }
}

for (let i = 0; i < 10; i++) {
  luckyMsg();
}

// now using promisses callbacks
function luckyMsgTraditional() {
  yayOrNay()
    .then((result) => console.debug("Success luckyMsgTraditional==" + result))
    .catch((result) => console.error("Failed. luckyMsgTraditional=" + result))
    .finally(() => console.log("sempre"));
}

for (let i = 0; i < 10; i++) {
  luckyMsgTraditional();
}

//---------------------------CONCLUSION-------------------------------

// after every concept above, where are these usefull . long runnign operation, best exemple, http request:
async function fetchUsers(endpoint) {
  const res = fetch(endpoint);
  res.then(async (res2) => {
    let data = await res2.json();
    let data2 = data
      .filter((umUsr) => umUsr.id > 5) //["LUIZINHO", "UGUINHO","FULANINHO"]
      .map((user) => user.username);
    var div = document.getElementById("usernames");
    div.innerHTML = "" + data2;
    console.log("fetched data" + data2);
  });
}
fetchUsers("https://jsonplaceholder.typicode.com/users");

console.groupEnd();
