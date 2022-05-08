class ExplorerService{

    static filterByMission(explorers,mission){
        const explorersInMission = explorers.filter((explorer) => {
            let mision = explorer.mission;
            //console.log(mision);
            if(mision && isNaN(mision) && mission && isNaN(mission)){
            //console.log("Existe mision y NO es un numero")
                if(mision && mision.toLowerCase() == mission.toLowerCase()){
                    return explorer.name;
                }
            }

        });
        return explorersInMission;
    }
    static getAmountOfExplorerByMission(explorers,mission){
        const ExplorerByMission = this.filterByMission(explorers,mission);
        return ExplorerByMission.length;
    }
    static getExplorersUsernamesByMission(explorers,mission){
        const notUndefined = anyValue => typeof anyValue !== "undefined";
        const ExplorerByMission = this.filterByMission(explorers,mission);
        const usernamesInNode = ExplorerByMission.map((explorer) =>{
            if(explorer.githubUsername && isNaN(explorer.githubUsername)){
                return explorer.githubUsername;
            }
        }
        
        ).filter(notUndefined); 
        return usernamesInNode;
    }
}

module.exports = ExplorerService;