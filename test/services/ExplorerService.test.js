const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Test para ExplorerService",() =>{
    test("Requerimiento 1: Calcular todos los explorer en una mision",() => {
        const explorer = [{mission:"java"}];
        const explorerByMission = ExplorerService.filterByMission(explorer,"java");
        expect(explorerByMission.length).toBe(1);
    });
});

describe("Test para ExplorerService",() =>{
    test("Requerimiento 2: Conjunto vacio",() => {
        const explorer = [{}];
        const explorerByMission = ExplorerService.filterByMission(explorer,"java");
        expect(explorerByMission.length).toBe(0);
    });
});

describe("Test para ExplorerService",() =>{
    test("Requerimiento 3: Misión en mayusculas",() => {
        const explorer = [{mission:"JAVA"}];
        const explorerByMission = ExplorerService.filterByMission(explorer,"java");
        expect(explorerByMission.length).toBe(1);
    });
});
describe("Test para ExplorerService",() =>{
    test("Requerimiento 4: Misión es un numero",() => {
        const explorer = [{mission:1}];
        const explorerByMission = ExplorerService.filterByMission(explorer,"java");
        expect(explorerByMission.length).toBe(0);
    });
});

//////getAmountOfExplorersByMission
describe("Test para ExplorerService - getAmountOfExplorerByMission",() =>{
    test("Requerimiento 5: Calcular todos los explorer en una mision y contarlos por getAmountOfExplorerByMission",() => {
        const explorer = [{mission:"java"}];
        const explorerByMission = ExplorerService.getAmountOfExplorerByMission(explorer,"java");
        expect(explorerByMission).toBe(1);
    });
});

describe("Test para ExplorerService - getAmountOfExplorerByMission",() =>{
    test("Requerimiento 6: Conjunto vacio para contar con getAmountOfExplorerByMission",() => {
        const explorer = [{}];
        const explorerByMission = ExplorerService.getAmountOfExplorerByMission(explorer,"java");
        expect(explorerByMission).toBe(0);
    });
});

describe("Test para ExplorerService - getAmountOfExplorerByMission",() =>{
    test("Requerimiento 7: Misión en mayusculas para contar con getAmountOfExplorerByMission",() => {
        const explorer = [{mission:"JAVA"}];
        const explorerByMission = ExplorerService.getAmountOfExplorerByMission(explorer,"java");
        expect(explorerByMission).toBe(1);
    });
});
describe("Test para ExplorerService - getAmountOfExplorerByMission",() =>{
    test("Requerimiento 8: Misión es un numero para contar con getAmountOfExplorerByMission",() => {
        const explorer = [{mission:1}];
        const explorerByMission = ExplorerService.getAmountOfExplorerByMission(explorer,"java");
        expect(explorerByMission).toBe(0);
    });
});
//////getExplorersUsernamesByMission
describe("Test para ExplorerService - getExplorersUsernamesByMission",() =>{
    test("Requerimiento 9: Adquirir el nombre de los explorer en la mision",() => {
        const explorer = [{githubUsername: "ajolonautaFAKE",mission:"Java"}];
        const expected = ["ajolonautaFAKE"];
        const explorerByMission = ExplorerService.getExplorersUsernamesByMission(explorer,"java");
        expect(explorerByMission).toEqual(expect.arrayContaining(expected));
    });
});
describe("Test para ExplorerService - getExplorersUsernamesByMission",() =>{
    test("Requerimiento 10: Prueba sin username y con numeros en githubusername",() => {
        const explorer = [{githubUsername: "ajolonauta1",mission:"Java"},{mission:"Java"},{githubUsername: "ajolonauta2",mission:"Java"},{githubUsername: 0,mission:"Java"}];
        const expected = ["ajolonauta1", "ajolonauta2"];
        const explorerByMission = ExplorerService.getExplorersUsernamesByMission(explorer,"java");
        expect(explorerByMission).toEqual(expect.arrayContaining(expected));
    });
});