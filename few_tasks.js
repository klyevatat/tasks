function countCats(mass) {
  let count = 0;
  for (let i = 0; i < mass.length; i++) {
    for (let j = 0; j < mass[i].length; j++) {
      if (mass[i][j] == "^^") {
        count++;
      }
    }
  }
  return count;
}
console.log(
  countCats([
    [0, 1, "^^"],
    [0, "^^", "^^", 2],
    ["^^", 1, 2],
  ])
);
/*task is to implement the createDreamTeam(members) function 
that returns name of a newly made team (string) based on the names of its members (Array)*/
function createDreamTeam(members) {
  let nameDreamTeam = "";
  nameDreamTeam = members
    .filter((item) => typeof item == "string")
    .map((item) => item[0])
    .sort()
    .join("");
  if (nameDreamTeam != "") {
    return nameDreamTeam;
  } else return false;
}
// console.log(createDreamTeam(["Olivia", 1111, "Lily", "Oscar", true, null]));
// console.log(createDreamTeam([1, 1111, 3, 6, true, null]));

//What season?
const springDate = new Date(2020, 06, 31);
function getSeason(date) {
  if (date == undefined) {
    return "Unable to determine the time of year!";
  }
  if (typeof date != "date") {
    throw "Error";
  }

  let month = date.getMonth();
  switch (month) {
    case 2:
    case 3:
    case 4:
      return "spring";
    case 5:
    case 6:
    case 7:
      return "summer";
    case 8:
    case 9:
    case 10:
      return "autumn";
    case 11:
    case 0:
    case 1:
      return "winter";
  }
}
console.log(getSeason(springDate));
console.log(getSeason("pringDate"));
