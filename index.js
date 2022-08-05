//jshint esversion:6

const superheroes = require("superheroes");
const supervillains = require('supervillains');

let mySSuperhero = superheroes.random()
let mySupervillain = supervillains.random();

console.log(`${mySSuperhero} will destroy ${mySupervillain}`)


