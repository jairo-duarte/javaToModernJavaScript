console.group("async");

// so it begins
function cake() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🎂");
    }, 2000);
  });
}

async function msg() {
  const msg = await cake();
  console.log("Message:", msg);
}

msg(); // Message: 🦇 <-- after 2 seconds

//-------------------------COMPOSITION----------------------------------------

function the() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("the");
    }, 300);
  });
}

function isLie() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("is a lie!");
    }, 500);
  });
}

// old school es6
function concPromisses() {
  the().then((a) =>
    cake().then((b) =>
      isLie().then((c) => console.log(`concPromisses: ${a} ${b} ${c}`)),
    ),
  );
}
concPromisses(); // <-- after 1 second

// new way
async function compMsg() {
  const a = await the();
  const b = await cake();
  const c = await isLie();

  console.log(`compMsg: ${a} ${b} ${c}`);
}
compMsg(); // <-- after 1 second

//-----------------------FASTER-------------------------------------------
// parallel
async function parallelMsg() {
  const [a, b, c] = await Promise.all([the(), cake(), isLie()]);
  console.log(`parallelMsg: ${a} ${b} ${c}`);
}

parallelMsg(); // 🤡 lurks in the shadows <-- after 500ms

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
  return new Promise((resolve, reject) => {
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

function yayOrNay() {
  return new Promise((resolve, reject) => {
    const val = Math.round(Math.random() * 1); // 0 or 1, at random

    val ? resolve("Lucky!!") : reject("Nope 😠");
  });
}

async function luckyMsg() {
  try {
    const msg = await yayOrNay();
    console.log("luckyMsg=" + msg);
  } catch (err) {
    console.log("luckyMsg=" + err);
  }
}
console.groupCollapsed("luckyMsg");
for (let i = 0; i < 10; i++) {
  luckyMsg();
}
console.groupEnd();

//---------------------------CONCLUSION-------------------------------

// after every concept above, where are these usefull . long runnign operation, best exemple, http request:
async function fetchUsers(endpoint) {
  const res = await fetch(endpoint);
  let data = await res.json();

  data = data.map((user) => user.username);

  console.log("fetched data" + data);
}
fetchUsers("https://jsonplaceholder.typicode.com/users");

console.groupEnd();
