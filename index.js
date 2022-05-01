const Reader = require("./lib/utils/reader")
const ExplorerService = require("./lib/services/ExplorerService")

const explorers = Reader.readJsonFile("explorer.json")
//console.log(explorers)

//Acplicacion de ExplorerService sobre la lista de explorer
console.log(ExplorerService.filterByMission(explorers,"java"))