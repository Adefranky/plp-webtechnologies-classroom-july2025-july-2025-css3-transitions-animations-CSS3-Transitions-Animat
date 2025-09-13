// Global variable
let globalValue = 10;

// Function with parameter & return value
function doubleNumber(num) {
  // local scope
  let result = num * 2;
  return result;
}

// Reusable function to update DOM
function showResult(message) {
  document.getElementById("result").innerText = message;
}

// ==========================
// Part 3: Combining JS + CSS
// ==========================
const box = document.getElementById("animatedBox");
const animateBtn = document.getElementById("animateBtn");
const calculateBtn = document.getElementById("calculateBtn");

// Trigger CSS animation dynamically
animateBtn.addEventListener("click", () => {
  box.classList.add("animate");

  // Remove class after animation to allow re-trigger
  setTimeout(() => {
    box.classList.remove("animate");
  }, 1000);
});

// Using function to calculate value & show result
calculateBtn.addEventListener("click", () => {
  let doubled = doubleNumber(globalValue); // using global variable
  showResult(`Double of ${globalValue} is ${doubled}`);
});

// ==========================
// Popup Example
// ==========================
const popup = document.getElementById("popup");
const openPopupBtn = document.getElementById("openPopupBtn");
const closePopupBtn = document.getElementById("closePopupBtn");

openPopupBtn.addEventListener("click", () => {
  popup.classList.add("show");
});

closePopupBtn.addEventListener("click", () => {
  popup.classList.remove("show");
});
