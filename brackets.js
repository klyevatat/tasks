/*Implement function check(str, bracketsConfig), 
that for given brackets sequence will return true if it is correct and false otherwise

In the second param there is bracketsConfig - the array of pairs open-closed brackets. 
Each subarray includes only 2 elements - opening and closing bracket*/

function check(str, bracketsConfig) {
  let arr = str.split("");
  const obj = Object.fromEntries(bracketsConfig);
  let stack = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === "|" && obj[stack[stack.length - 1]] === "|") {
      stack.pop();
    } else if (arr[i] in obj) {
      stack.push(arr[i]);
    } else if (arr[i] === obj[stack[stack.length - 1]]) {
      stack.pop();
    }
  }
  if (stack.length === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}
check("()", [["(", ")"]]); // -> true
check("((()))()", [["(", ")"]]); // -> true
check("())(", [["(", ")"]]); // -> false
check("([{}])", [
  ["(", ")"],
  ["[", "]"],
  ["{", "}"],
]); // -> true
check("[(])", [
  ["(", ")"],
  ["[", "]"],
]); // -> false
check("[]()", [
  ["(", ")"],
  ["[", "]"],
]); // -> true
check("[]()(", [
  ["(", ")"],
  ["[", "]"],
]); // -> false

// // special case: opening and closing bracket can be the same :)

check("||", [["|", "|"]]); // -> true
check("|()|", [
  ["(", ")"],
  ["|", "|"],
]); // -> true
check("|(|)", [
  ["(", ")"],
  ["|", "|"],
]); // -> false
check("|()|(||)||", [
  ["(", ")"],
  ["|", "|"],
]); // -> true
