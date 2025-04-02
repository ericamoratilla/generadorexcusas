import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  const action = ['ate', 'peed', 'crushed', 'broke'];
  const what = ['my homework', 'my phone', 'the car'];
  const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


  document.getElementById("excuse").innerHTML =
    who[Math.floor(Math.random() * who.length)] + " " +
    action[Math.floor(Math.random() * action.length)] + " " +
    what[Math.floor(Math.random() * what.length)] + " " +
    when[Math.floor(Math.random() * when.length)] + ".";

};
