// let arr = ["I", "study", "JavaScript", "right", "now"];
// arr.splice(2, 1);
// console.log(arr);
let a = "Salom dunyo";
function reverse(a) {
  a = a.split("").reverse().join("");
  return a;
}
let b = reverse(a);
console.log(b);
