class ExplorerService{

    static filterByMission(explorers,mission){
    const explorersInMission = explorers.filter((explorer) => explorer.mission == mission)
    return explorersInMission
    }
    static getAmountOfExplorerByMission(explorers,mission){

    }
    static getExplorersUsernamesByMission(explorers,mission){

    }






}

module.exports = ExplorerService