import getRomanFromDecimal from "./getRomanFromDecimal.js";


describe("getRomanFromDecimal",()=>{
    it.each([
        ["V", 5],
        ["III", 3],
        ["D", 500],
        ["XIV", 14],
        ["LXVI", 66],
        ["CMXCIX", 999],
        ["DCCLXXXVIII", 788]
    ])("should return %s if user introduce %i",(expectedRomanNumber, decimal)=>{
        const romanNumber = getRomanFromDecimal(decimal);
        
        expect(romanNumber).toEqual(expectedRomanNumber);
    })
})