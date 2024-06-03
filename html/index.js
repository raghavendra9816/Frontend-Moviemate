//function
//es5
//function define gardai chau
function sum(a, b) {
  const result = a * b;
  return result;
}
//function call
// const res = multiply(2, 3);
// console.log(res);

// //es6
// //functiion define
// //explicit function
// const multiply1 = (a, b) => {
//   return a * b;
// };
// //implicit function
// const multiply2 = (a, b) => a * b;

// //werite a function to check if the number is even or odd
// const check = (num1) => {
//   return num1 % 2 === 0 ? console.log(" even") : console.log("odd");
// };
// check(40);
//write a js function that convert full name to proper case
//eg:achyut adhikari=>Achyut Adhikari
const properCase = (name) =>
  name
    .split(" ")
    .map(
      (word) =>
        word.slice(0, 1).toUpperCase() +
        word.slice(1, word.length).toLowerCase()
    )
    .join(" ");

console.log(properCase("achyut adhikari"));

//Write a js function to check f the phone number is nepal mobile number
const checkNumber = (num) =>
  num.length === 10 && num.slice(0, 2).match(/9[8|7]/gi)
    ? console.log("nepal number")
    : console.log("not nepal number");

checkNumber("9616869591");

//default function
/* defult function=>function where i can pass defult value of parameter
parameterized function
explict function
implict function
IIfe
ananymous
callback
closure
Inline
pure
 */

const achyut = (name = "user") => {
  console.log(name);
};
achyut("");
//default function pagination ma use garchau

//parameterized function
const getNumberFormatter = ({ a = 1, b = 2, c = 3 }) => {
  return a * b * c;
};
console.log(getNumberFormatter({}));

const pagination = (page = 1, search = "", role = "", limit = 5) => {};

//explicit function
const hello = (name1) => {
  return `hi $(name1)`;
};
console.log(hello("Achyut"));
//implicit function
const helloo = (name) => `hi $(name)`;
console.log(helloo("achyut"));

//IIfe (Immadiately Invoked Function Expression)
(() => {
  console.log("helllo it is iife function");
})(); //iife used in project setup ko lagi like Devops(script immadetly run)

//anonymous function
//function ko nam na bhako
const fn = function () {};
//multiple thau ma use garna milcha

//callback function
//function declare matra vako
const print = (data) => {
  console.log(data);
};
const getData = (a, b, callBack) => {
  const dis = (b / 100) * a;
  callBack(dis);
};
getData(1000, 2, print);

//closure function(env variable)
const password = () => {
  const pw = "ssss" || "abc";
  return { pw };
};
console.log(password());

//anonymous function lai value assign garau vana inline function
const fsn = function test() {};

//pure function =>testo function jasko result change hudaina
//real life ma utility function lai pure function
//kasto function vana utility function like date converter
const slug = (test) => {
  return "";
};
slug("the cattel for the cry of ssss");
