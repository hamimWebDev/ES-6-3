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
// console.log(myAll);

// Next level ES-6

// Template string

const nextLevel = (name) => {
  const newSms = "Hello my name is" + name;
  const newSms1 = `Hello my name is ${name}`;
  console.log(newSms1);
};
export const nextLeve2 = (name) => {
  const newSms = "Hello my name is" + name;
  const newSms1 = `Hello my other name is ${name}`;
  console.log(newSms1);
};

// nextLevel("Hamim");

// Export System

export default nextLevel;
