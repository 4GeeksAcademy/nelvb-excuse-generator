import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function generateExcuse() {
    var who = ["The dog", "My grandma", "The mailman", "My bird"];
    var action = ["ate", "peed", "crushed", "broke"];
    var what = ["my homework", "my phone", "the car"];
    var when = [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ];

    var whoIndex = Math.floor(Math.random() * who.length);
    var actionIndex = Math.floor(Math.random() * action.length);
    var whatIndex = Math.floor(Math.random() * what.length);
    var whenIndex = Math.floor(Math.random() * when.length);

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

  function displayExcuse() {
    var excuse = generateExcuse();
    console.log(excuse);
  }

  displayExcuse();
};
