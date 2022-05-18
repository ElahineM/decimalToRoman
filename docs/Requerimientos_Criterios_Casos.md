## Requirements

- Functional
  - Convertarabic number to its roman equivalent.
  - Read user input from console.
  - Show outpur from console and end the execution.

- Non functional 
  - Should be compatible with Windows, Linux and MacOS with NodeJS v16+.

## Acceptance Criteria

- Should retrieve a number between 1 and 1000 and covert it to roman.
- Should show the correct roman number.
- Should tell to the user if the input is invalid.



## Test cases

| **Test Case Description**             | **Test Data**                  | **Expected Result**                             |
|--------------------------------------------------------------------------------------------------------------------------|--------------------------------|-------------------------------------------------|
| should return V if user introduce 5   | input = 5                      | V                                               |
| should return III if user introduce 3 | input = 3                      | III                                             |
| should return D if user introduce 500 | input = 500                    | D                                               | 
| should return XIV if user introduce 14| input = 14                     | XIV                                             |
| should return LXVI if user introduce 66| input = 66                    | LXVI                                            |
| hould return CMXCIX if user introduce 999| input = 999                 |CMXCIX                                           |
| should return DCCLXXXVIII if user introduce 788| input = 788           |DCCLXXXVIII                                      |





