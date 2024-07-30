const submitBtn = document.getElementById("submit");
const container = document.querySelector(".container");
const inputNum = document.getElementById("number-cont");
// Create a result container
const resultCont = document.createElement("div");
resultCont.setAttribute("id", "result-cont");
// Create a h2 to hold the results
const result = document.createElement("h2");
result.setAttribute("id", "result");

function checkNumberOfDigits() {
  // Grab the number entered
  let num = document.getElementById("number-cont").value;
  // Check the length of the number entered
  if (num.length >= 4 && num.length <= 10) {
    return num;
  }
  // return false;
  return false;
}
