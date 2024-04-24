// ternary operator

const myAddress = {
  house: 10,
  block: "c",
  road: "Sholok Road",
  area: "Jugihati",
  location: "Barishal",
};

const myPostalCode = myAddress.postal?.code ? myAddress.postal.code : 120;

console.log(myPostalCode);
