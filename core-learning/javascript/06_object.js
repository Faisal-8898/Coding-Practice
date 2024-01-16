// object literal
// by default object is mutable

const secretInfo = Symbol("secret Information");

const player = {
  name: "rohit sharma",
  "full name": "rohit gurunath sharma",
  age: 34,
  height: 6.0,
  country: "Bangladesh",
  playingOrNot: true,
  playedTournament: ["IPL", "BPL", "PSL", "BBL", "CPL", "T20 Blast"],
  [secretInfo]: "48203kj",
};

// Object.freeze(player);
// player.freeze();
player.name = "Rohit";
console.log(player.name);
console.log(player.playedTournament);
console.log(player["full name"]);
console.log(player[secretInfo]);
// need to elaborate this also
const obj1 = { name: "romij", age: 23 };
const obj2 = { address: "matuail", age: 32 };

// const obj3 = { obj1, obj2 };
// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2);

// const obj3 = { ...obj1, ...obj2 };

// console.log(obj3);
