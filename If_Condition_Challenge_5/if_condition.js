console.log("%cIf Condition Challenge", "color: red; font-size: 20px");

let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("a > 40");
} else {
  console.log("Unknown");
}

a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 To 40")
  : a > 40
  ? console.log("a > 40")
  : console.log("Unknown"); // Ternary If

// ----------------

let st = "Elzero Web School";
let d = true;

if (String(st.length * ++d) === "34") {
  console.log("Good");
} // Good

if (st[st.indexOf("W")] === "W") {
  console.log("Good");
} // Good

if (st !== "String") {
  console.log("Good");
} // Good

if (typeof st.length === "number") {
  console.log("Good");
} // Good

if (st.split(" ")[0].repeat(2) === "ElzeroElzero") {
  console.log("Good");
} // Good

// ----------------

let job = "Designer";
let salary = 0;

if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}

console.log(`the Salary of the ${job} is ${salary}$`);

// using switch condition

switch (job) {
  case "Manager":
    salary = 8000;
    break;
  case "IT":
  case "Support":
    salary = 6000;
    break;
  case "Designer":
  case "Developer":
    salary = 7000;
    break;
  default:
    salary = 4000;
    break;
}

console.log(`the Salary of the ${job} is ${salary}$`);
