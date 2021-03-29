/* to implement the so-called 'towel sort' algorithm.*/
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

function towelSort(matrix) {
  for (let i = 1; i < matrix.length; i = i + 2) {
    matrix[i].reverse();
  }
  return matrix;
}
console.log(towelSort(matrix));
