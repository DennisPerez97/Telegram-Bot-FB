const Reader = require("./lib/utils/reader");
const ExplorerService = require("./lib/services/ExplorerService");
const FizzBuzzService = require("./lib/services/FizzBuzzService");

const explorers = Reader.readJsonFile("explorer.json");
//console.log(explorers)

//Acplicacion de ExplorerService sobre la lista de explorer
const FilterNode = ExplorerService.filterByMission(explorers, "node");
console.log(FilterNode);
const AmountByMission = ExplorerService.getAmountOfExplorerByMission(explorers, "node");
console.log(AmountByMission);
const UserByMission = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
console.log(UserByMission);

const explorer1 = {name: "Explorer1", score: 1};
const trick = FizzBuzzService.applyValidationInExplorer(explorer1); // {name: "Explorer1", score: 1, trick: 1} 
console.log(trick);
const explorer3 = {name: "Explorer3", score: 3};
const Fizz = FizzBuzzService.applyValidationInExplorer(explorer3); // {name: "Explorer3", score: 3, trick: "FIZZ"}
console.log(Fizz);

const explorer5 = {name: "Explorer5", score: 5};
const Buzz = FizzBuzzService.applyValidationInExplorer(explorer5); // {name: "Explorer5", score: 5, trick: "BUZZ"}
console.log(Buzz);

const explorer15 = {name: "Explorer15", score: 15};
const Fizzbuzz = FizzBuzzService.applyValidationInExplorer(explorer15); // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
console.log(Fizzbuzz);