const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Test para ExplorerController",() =>{
    test("Requerimiento 1: Probar el retorno de explorer por mision",() => {
        expect(ExplorerController.getExplorerByMission("Node").length).toBe(10);
    });
});
describe("Test para ExplorerController",() =>{
    test("Requerimiento 2: Probar el retorno de explorer por mision con mision en blanco",() => {
        expect(ExplorerController.getExplorerByMission("").length).toBe(0);
    });
});
describe("Test para ExplorerController",() =>{
    test("Requerimiento 3: Probar el retorno de explorer por mision con mision vacia",() => {
        expect(ExplorerController.getExplorerByMission().length).toBe(0);
    });
});
describe("Test para ExplorerController",() =>{
    test("Requerimiento 4: Probar el retorno de explorer por mision con mision numerica",() => {
        expect(ExplorerController.getExplorerByMission(4).length).toBe(0);
    });
});

describe("Test para ExplorerController: getExplorersUsernamesByMission",() =>{
    test("Requerimiento 1: Probar el retorno de explorer por mision",() => {
        expect(ExplorerController.getExplorersUsernamesByMission("Node")).toBe(10);
    });
});
describe("Test para ExplorerController:getExplorersUsernamesByMission",() =>{
    test("Requerimiento 2: Probar el retorno de explorer por mision con mision en blanco",() => {
        expect(ExplorerController.getExplorersUsernamesByMission("")).toBe(0);
    });
});
describe("Test para ExplorerController:getExplorersUsernamesByMission",() =>{
    test("Requerimiento 3: Probar el retorno de explorer por mision con mision vacia",() => {
        expect(ExplorerController.getExplorersUsernamesByMission()).toBe(0);
    });
});
describe("Test para ExplorerController:getExplorersUsernamesByMission",() =>{
    test("Requerimiento 4: Probar el retorno de explorer por mision con mision numerica",() => {
        expect(ExplorerController.getExplorersUsernamesByMission(4)).toBe(0);
    });
});