const FizzBuzzService = require("./../services/FizzBuzzService");
const ExplorerService=require("./../services/ExplorerService");
const Reader = require("../utils/reader");

class ExplorerController{
    static getFizzBuzzFeature(score){
        const trick = FizzBuzzService.applyValidationFizzBuzz(score);
        return trick;
    }
    static getFBbyMsg(msg){
        const numberToApplyFb = parseInt(msg.text);
    
        if(!isNaN(numberToApplyFb)){
            const fizzbuzzTrick = ExplorerController.getFizzBuzzFeature(numberToApplyFb);
            const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
            return responseBot;
        } else {
            return "Envia un numero valido"
        }
        return "Ha ocurrido un error #001" //001 significa que se encuentra en getFBbyMsh
    }
    static getExplorerByMsg(msg){
        const ExplorerByMission = ExplorerController.getExplorersUsernamesByMission(msg)
        let txt = ""
        txt = `${ExplorerByMission[0]}`
        for(var i = 1; i<ExplorerByMission.length;i++){
            txt = txt + ", " + ExplorerByMission[i];
        }
            return txt
    }
    static getExplorerByMission(mission){
        const explorers = Reader.readJsonFile("explorer.json");
        const ExplorerByMission = ExplorerService.filterByMission(explorers,mission);
        return ExplorerByMission;
    }
    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorer.json");
        const ExplorerByMission = ExplorerService.getExplorersUsernamesByMission(explorers,mission);
        return ExplorerByMission;
    }
    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile("explorer.json");
        const ExplorerByMission = ExplorerService.getAmountOfExplorerByMission(explorers,mission);
        return ExplorerByMission;
    }
}
module.exports = ExplorerController;