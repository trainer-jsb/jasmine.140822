import { greet } from "./greetFunction";

describe('greet function',()=>{
    it('greet by name',()=>{
        const expectedName = "Ayush";
        const result = greet(expectedName);
        expect(result).toContain(expectedName);
    });
});