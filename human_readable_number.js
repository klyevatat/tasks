/*task is to implement function toReadable that converts given number, to readable string.*/

function toReadable(num) {
  let obj = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eightteen",
    19: "nineteen",
  };
  function CreateDepthOfNumber(num) {
    let arr = num.toString().split("");
    let depthOfNumber = {
      units: 0,
      dozens: 0,
      hundreds: 0,
    };
    console.log(arr);
    for (let key of Object.keys(depthOfNumber)) {
      depthOfNumber[key] = arr.pop();
    }
    console.log(depthOfNumber);
    return depthOfNumber;
  }
  let tmp = "";
  let depthOfNumber = CreateDepthOfNumber(num);
  if (depthOfNumber["hundreds"] != undefined) {
    tmp = `${obj[depthOfNumber["hundreds"]]} hundreds `;
  }
  if (
    depthOfNumber["dozens"] != undefined &&
    depthOfNumber["dozens"] != "0" &&
    depthOfNumber["dozens"] != "1"
  ) {
    if (depthOfNumber["dozens"] === "2") {
      tmp += `twenty `;
    } else if (depthOfNumber["dozens"] === "3") {
      tmp += `thirty `;
    } else {
      tmp += `${obj[depthOfNumber["dozens"]]}ty `;
    }
  }

  if (depthOfNumber["dozens"] === "1") {
    tmp += `${obj[depthOfNumber["dozens"] + depthOfNumber["units"]]}`;
  } else if (depthOfNumber["units"] !== "0") {
    tmp += `${obj[depthOfNumber["units"]]}`;
  }
  console.log(tmp);
}
//toReadable(1); // Will return 'one'
toReadable(999); //will return 'nine hundred ninety seven'
