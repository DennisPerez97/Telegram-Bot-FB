const FizzBuzzService = require("./../../lib/services/FizzBuzzService");

describe("Test para FizzBuzzService",() =>{
    test("Requerimiento 1: Calcular las pruebas con los explorer, Validacion con %3",() => {
        const explorer = [{score:3}];
        const explorerValidation = explorer.map((explorer) => FizzBuzzService.applyValidationInExplorer(explorer));
        expect(explorerValidation[0].trick).toBe("FIZZ");
    });
});
describe("Test para FizzBuzzService",() =>{
    test("Requerimiento 2: Calcular las pruebas con los explorer, Validacion con %5",() => {
        const explorer = [{score:5}];
        const explorerValidation = explorer.map((explorer) => FizzBuzzService.applyValidationInExplorer(explorer));
        expect(explorerValidation[0].trick).toBe("BUZZ");
    });
});
describe("Test para FizzBuzzService",() =>{
    test("Requerimiento 3: Calcular las pruebas con los explorer, Validacion con %3 y %5",() => {
        const explorer = [{score:15}];
        const explorerValidation = explorer.map((explorer) => FizzBuzzService.applyValidationInExplorer(explorer));
        expect(explorerValidation[0].trick).toBe("FIZZBUZZ");
    });
});
describe("Test para FizzBuzzService",() =>{
    test("Requerimiento 4: Calcular las pruebas con los explorer, Validacion con ninguno",() => {
        const explorer = [{score:1}];
        const explorerValidation = explorer.map((explorer) => FizzBuzzService.applyValidationInExplorer(explorer));
        expect(explorerValidation[0].trick).toBe(1);
    });
});
describe("Test para FizzBuzzService",() =>{
    test("Requerimiento 5: Calcular las pruebas con los explorer, Validacion si el score fuera un numero en forma de cadena",() => {
        const explorer = [{score:"1"}];
        const explorerValidation = explorer.map((explorer) => FizzBuzzService.applyValidationInExplorer(explorer));
        expect(explorerValidation[0].trick).toBe(1);
    });
});
describe("Test para FizzBuzzService",() =>{
    test("Requerimiento 6: Calcular las pruebas con los explorer, Validacion si el score fuera una cadena",() => {
        const explorer = [{score:"hola"}];
        const explorerValidation = explorer.map((explorer) => FizzBuzzService.applyValidationInExplorer(explorer));
        expect(explorerValidation).toEqual(expect.arrayContaining(explorer));
    });
});