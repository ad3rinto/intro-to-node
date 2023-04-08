//jshint esversion:6

const superheroes = require("superheroes");
const supervillains = require('supervillains');

let mySuperhero = superheroes.random()
let mySupervillain = supervillains.random();

console.log(`${mySuperhero} will destroy ${mySupervillain}`)


