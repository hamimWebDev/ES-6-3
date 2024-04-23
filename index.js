// spread Operator
const myArray = [1, 2, 3];

const myCopiedArray = [...myArray];

myArray.push(4);
myCopiedArray.push(5);

// console.log(myArray);
// console.log(myCopiedArray);

// Rest Operator

function AddNumbers(fNum, sNum, ...params) {
  let sum = 0;
  for (const num of params) {
    sum = sum + num;
  }
  return sum;
}

// console.log(AddNumbers(1, 2, 3, 4, 5, 6));

// spread Operator object

const namePo = {
  name: "Hamim",
  profession: "Programer",
};

const ageLo = {
  Age: 21,
  location: "barishal",
};

const myAll = {
  ...namePo,
  ...ageLo,
};
console.log(myAll);
