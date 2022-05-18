const ROMAN_VALUES = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100, 
    XC: 90,
    L: 50,
    XL: 40,
    XXX: 30,
    XX: 20,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
}


export default function getRomanFromDecimal(decimal){
    let romanNumber = "";
    const romans = Object.keys(ROMAN_VALUES);

    romans.forEach((value)=>{
        let romanValue = ROMAN_VALUES[value];

        while(decimal >= romanValue){
            decimal -= romanValue;
            romanNumber += value;
        }
    })

    return romanNumber;
}