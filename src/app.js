/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // setear los arrays
  let subject = ["The dog", "My grandma", "His turtle", "My bird"];
  let accion = ["ate", "peed", "crushed", "broke"];
  let cosa = ["my homework", "the keys", "the car"];
  let cuando = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let rand1 = Math.floor(Math.random() * subject.length);
  let rand2 = Math.floor(Math.random() * accion.length);
  let rand3 = Math.floor(Math.random() * cosa.length);
  let rand4 = Math.floor(Math.random() * cuando.length);

  document.getElementById("excuse").innerHTML =
    subject[rand1] +
    " " +
    accion[rand2] +
    " " +
    cosa[rand3] +
    " " +
    cuando[rand4];
};
