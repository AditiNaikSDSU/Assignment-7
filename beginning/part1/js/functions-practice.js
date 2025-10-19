//STEP 1
function halfNumber(n) {
  const result = n / 2;
  console.log(`Half of ${n} is ${result}.`);
  return result;
}
halfNumber(5);

//STEP 2
function squareNumber(n) {
  const result = n * n;
  console.log(`The result of squaring the number ${n} is ${result}.`);
  return result;
}
squareNumber(3);

//STEP 3
function percentOf(part, whole) {
  const pct = (part / whole) * 100;
  const pctStr = Number.isFinite(pct) ? pct.toFixed(2) : "NaN";
  console.log(`${part} is ${pctStr}% of ${whole}.`);
  return pct;
}
percentOf(2, 4);

//STEP 4
function findModulus(a, b) {
  const mod = a % b;
  console.log(`${mod} is the modulus of ${a} and ${b}.`);
  return mod;
}
findModulus(10, 4);

//STEP 5

(function collectAndSum() {
  const input = typeof prompt === "function"
    ? prompt("Enter numbers separated by commas (e.g., 3, 4.5, -2):")
    : null;

  if (input === null) {
    console.log("User canceled input or prompt not available.");
    return;
  }

  const parts = input.split(",").map(s => s.trim()).filter(Boolean);
  const nums = parts.map(s => Number(s));
  if (nums.some(n => Number.isNaN(n))) {
    alert("One or more values were not valid numbers.");
    return;
  }

  function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) total += Number(arguments[i]);
    return total;
  }

  const total = sum.apply(null, nums);
  console.log(`You entered: [${nums.join(", ")}]`);
  console.log(`Sum = ${total}`);
  if (typeof alert === "function") alert(`Sum of your numbers is ${total}`);
})();
