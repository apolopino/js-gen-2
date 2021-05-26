/* eslint-disable */
import "bootstrap";
import "./style.css";

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

  //   Definir un random de acuerdo al largo de cada array
  let rand1 = Math.floor(Math.random() * subject.length);
  let rand2 = Math.floor(Math.random() * accion.length);
  let rand3 = Math.floor(Math.random() * cosa.length);
  let rand4 = Math.floor(Math.random() * cuando.length);

  //   Reemplazar el contenido de excuse con las palabras random
  document.getElementById("excuse").innerHTML =
    subject[rand1] +
    " " +
    accion[rand2] +
    " " +
    cosa[rand3] +
    " " +
    cuando[rand4];

  // otra forma es:
  //   let parrafo = document.getElementById("excuse");
  //   parrafo.innerHTML = contenido;
};
