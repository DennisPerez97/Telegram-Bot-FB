const FizzBuzzService = require("./../services/FizzBuzzService");
const ExplorerService=require("./../services/ExplorerService");
const Reader = require("../utils/reader");

class ExplorerController{
    static getFizzBuzzFeature(score){
        const trick = FizzBuzzService.applyValidationFizzBuzz(score)
        return trick;
    }
    static getExplorerByMission(mission){
        const explorers = Reader.readJsonFile("explorer.json")
        const ExplorerByMission = ExplorerService.filterByMission(explorers,mission)
        return ExplorerByMission
    }
    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorer.json")
        const ExplorerByMission = ExplorerService.getExplorersUsernamesByMission(explorers,mission)
        return ExplorerByMission
    }
    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile("explorer.json")
        const ExplorerByMission = ExplorerService.getAmountOfExplorerByMission(explorers,mission)
        return ExplorerByMission
    }
}
module.exports = ExplorerController;