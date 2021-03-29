/*task is to implement function that reverse digits of this number.*/

function reverse(num) {
  return +String(num).split("").reverse().join("");
}
console.log(reverse(123)); // 321
console.log(reverse(233)); // 332
console.log(reverse(535)); // 535
console.log(reverse(95034)); // 43059
