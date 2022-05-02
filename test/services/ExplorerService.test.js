const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Test para ExplorerService",() =>{
    test("Requerimiento 1: Calcular todos los explorer en una mision",() => {
        const explorer = [{mission:"java"}];
        const explorerByMission = ExplorerService.filterByMission(explorer,"java");
        expect(explorerByMission.length).toBe(1);
    });
});