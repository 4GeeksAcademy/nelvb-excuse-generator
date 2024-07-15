import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateRandomArray(array) {
  return Math.floor(Math.random() * array.length);
}

function generateExcuse() {
  const who = ["The dog", "My grandma", "The mailman", "My bird"];
  const action = ["ate", "peed", "crushed", "broke"];
  const what = ["my homework", "my phone", "the car"];
  const when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  const whoIndex = generateRandomArray(who);
  const actionIndex = generateRandomArray(action);
  const whatIndex = generateRandomArray(what);
  const whenIndex = generateRandomArray(when);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
}

function displayExcuse(excuse) {
  document.getElementById("The_excuse").innerText = excuse;
  console.log(excuse);
}

document.getElementById("generate-excuse-btn").addEventListener("click", () => {
  const excuse = generateExcuse();
  displayExcuse(excuse);
});

window.onload = function() {
  const excuse = generateExcuse();
  displayExcuse(excuse);
};
