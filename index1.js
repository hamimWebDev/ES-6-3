// Array Destructuring
const myFriend = ["Hamim", "Asif", "Ontu"];
const [bFriend, nFriend, gFriend] = myFriend;

// console.log(bFriend);
// console.log(nFriend);
// console.log(gFriend);

// object Destructuring

const myAddress = {
  house: 10,
  block: "c",
  road: "Sholok Road",
  area: "Jugihati",
  location: "Barishal",

};

const { house, block, road, area, location } = myAddress;

// console.log(house);
// console.log(block);
// console.log(road);
// console.log(area);

// Optional Chaining 

console.log(location.visa?.hi);


