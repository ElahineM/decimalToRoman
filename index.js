import readline from "readline";
import getRomanFromDecimal from "./getRomanFromDecimal.js";

function execute(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Introduce a decimal number between 1 and 1000: ",(input)=>{
        const numberInput = parseInt(input);
    
        if(!numberInput){
            console.log("Invalid input");
        }else{
            const romanValue = getRomanFromDecimal(numberInput);
            console.log('Result:', romanValue);
        }

        rl.close();
    })
}

execute();