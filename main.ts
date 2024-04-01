#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 4321;

let pinAnswer = await inquirer.prompt(
   [
        {
              name: "pin",
             message: "enter your pin",
              type: "number"
        }

    ]

);

if (pinAnswer.pin === myPin){
    console.log("Correct pin code!!!")

   let operationAns = await inquirer.prompt(
        [
            {
               name: "operation",
               message: "Please select option",
               type: "list",
               choices: ["withdraw", "check balance", "fastcash"] 
            }
        ]
    );

    if(operationAns.operation ==="withdraw") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "enter your amount",
                    type: "number"
                }
            ]
        );

        myBalance -= amountAns.amount;

        console.log(`Your remaining balance is: ${myBalance}`);

    } else if (operationAns.operation === "check balance"){
        console.log(`your balance is: ${myBalance}`);

    }else if (operationAns.operation === "fastcash"){
        let selectAns = await inquirer.prompt(
            [
                {
                    name: "select",
                    message: "select one option",
                    type: "list",
                    choices: ["1000", "5000", "8000", "10000"]
                }
            ]
        );
        myBalance -= selectAns.select;
        console.log(`your remaining balance is: ${myBalance}`);
    }
}

else {
    console.log("Incorrect pin number")
}