const ExplorerController = require("./../../lib/controllers/ExplorerController");
describe("Test para ExplorerController:getExplorerByMsg",() =>{
    test("Requerimiento 1: Probar el retorno de explorer por mision",() => {
        expect(ExplorerController.getExplorerByMsg("Node")).toBe(10);
    });
});
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

describe("Test para ExplorerController: getExplorersAmonutByMission",() =>{
    test("Requerimiento 1: Probar el retorno de explorer por mision",() => {
        expect(ExplorerController.getExplorersAmonutByMission("Node")).toBe(10);
    });
});
describe("Test para ExplorerController:getExplorersAmonutByMission",() =>{
    test("Requerimiento 2: Probar el retorno de explorer por mision con mision en blanco",() => {
        expect(ExplorerController.getExplorersAmonutByMission("")).toBe(0);
    });
});
describe("Test para ExplorerController:getExplorersAmonutByMission",() =>{
    test("Requerimiento 3: Probar el retorno de explorer por mision con mision vacia",() => {
        expect(ExplorerController.getExplorersAmonutByMission()).toBe(0);
    });
});
describe("Test para ExplorerController:getExplorersAmonutByMission",() =>{
    test("Requerimiento 4: Probar el retorno de explorer por mision con mision numerica",() => {
        expect(ExplorerController.getExplorersAmonutByMission(4)).toBe(0);
    });
});

describe("Test para ExplorerController: getExplorersUsernamesByMission",() =>{
    test("Requerimiento 1: Probar el retorno de explorer por mision",() => {
        const expected = ["ajolonauta1", "ajolonauta2", "ajolonauta3", "ajolonauta4", "ajolonauta5", "ajolonauta11", "ajolonauta12", "ajolonauta13", "ajolonauta14", "ajolonauta15"];
        expect(ExplorerController.getExplorersUsernamesByMission("Node")).toEqual(expect.arrayContaining(expected));
    });
});
describe("Test para ExplorerController:getExplorersUsernamesByMission",() =>{
    test("Requerimiento 2: Probar el retorno de explorer por mision con mision en blanco",() => {
        const expected = [];
        expect(ExplorerController.getExplorersUsernamesByMission("")).toEqual(expect.arrayContaining(expected));
    });
});
describe("Test para ExplorerController:getExplorersUsernamesByMission",() =>{
    test("Requerimiento 3: Probar el retorno de explorer por mision con mision vacia",() => {
        const expected = [];
        expect(ExplorerController.getExplorersUsernamesByMission()).toEqual(expect.arrayContaining(expected));
    });
});
describe("Test para ExplorerController:getExplorersUsernamesByMission",() =>{
    test("Requerimiento 4: Probar el retorno de explorer por mision con mision numerica",() => {
        const expected = [];
        expect(ExplorerController.getExplorersUsernamesByMission(4)).toEqual(expect.arrayContaining(expected));
    });
});