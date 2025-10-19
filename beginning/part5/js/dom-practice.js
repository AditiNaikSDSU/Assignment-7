/*eslint-env browser*/

//STEP 1
window.oldSchoolClicked = function () {
  alert("I have been clicked");
};
const btn1 = document.createElement("button");
btn1.textContent = "Step 1 Button (onclick attribute)";
btn1.setAttribute("onclick", "oldSchoolClicked()"); 
document.addEventListener("DOMContentLoaded", () => document.body.appendChild(btn1));

//STEP 2

const btn2 = document.createElement("button");
btn2.id = "btn-property";
btn2.textContent = "Step 2 Button (.onclick)";
document.addEventListener("DOMContentLoaded", () => {
  document.body.appendChild(btn2);
  const found = document.getElementById("btn-property");
  found.onclick = function () {
    alert("I have been clicked");
  };
});

//STEP 3

function showClicked() {
  alert("I have been clicked");
}
const btn3 = document.createElement("button");
btn3.id = "btn-listener-fn";
btn3.textContent = "Step 3 Button (listener → function)";
document.addEventListener("DOMContentLoaded", () => {
  document.body.appendChild(btn3);
  btn3.addEventListener("click", showClicked);
});

//STEP 4
const btn4 = document.createElement("button");
btn4.id = "btn-listener-inline";
btn4.textContent = "Step 4 Button (listener → inline)";
document.addEventListener("DOMContentLoaded", () => {
  document.body.appendChild(btn4);
  btn4.addEventListener("click", function () {
    alert("I have been clicked");
  });
});

//STEP 5

