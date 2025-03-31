const input = document.querySelector("#input");
const calculate = document.querySelector("#calculate");
const lcmResult = document.querySelector("#lcm-result");
const gcdResult = document.querySelector("#gcd-result");

function gcdOfTwo(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcmOfTwo(a, b) {
  return (a * b) / gcdOfTwo(a, b);
}

function gcdOfArr(arr) {
  let gcd = arr[0];
  for (i = 1; i < arr.length; i++) {
    gcd = gcdOfTwo(gcd, arr[i]);
    if (gcd === 1) break;
  }
  return gcd;
}

function lcmOfArr(arr) {
  let lcm = arr[0];
  for (i = 1; i < arr.length; i++) {
    lcm = lcmOfTwo(lcm, arr[i]);
  }
  return lcm;
}

calculate.addEventListener("click", function () {
  let inputValue = input.value.trim();

  if (inputValue === "") {
    lcmResult.textContent = "-";
    gcdResult.textContent = "-";
    alert("Put a value first.")
    return;
  }

  let numbers = inputValue.split(",").map((num) => parseInt(num.trim()));

  if (numbers.some(isNaN) || numbers.some((num) => num < 1)) {
    input.value = "";
    alert("Write a number and the number should not be less than 1");
    return;
  }

  let lcmVal = lcmOfArr(numbers);
  let gcdVal = gcdOfArr(numbers);
  lcmResult.textContent = lcmVal;
  gcdResult.textContent = gcdVal;
});

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevents form submission if inside a form
    calculate.click(); // Triggers the calculate button click event
  }
});
