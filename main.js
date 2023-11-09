const input = require('sync-input');
const Currencies = {
    USD: 1.0,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75
}

console.log(`Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`)

let exitProgram = false;

while (!exitProgram) {
    let userChoice = input(`What do you want to do?
1-Convert currencies 2-Exit program\n`);

    switch (userChoice.trim()) {
        case '1':
            let userInput = (input(`What do you want to convert?\nFrom: `)).toUpperCase();

            switch (true) {
                case !Object.keys(Currencies).includes(userInput):
                    console.log("Unknown currency");
                    break;

                case Object.keys(Currencies).includes(userInput):
                    let toCurrency = (input(`To: `)).toUpperCase();
                    switch (true) {
                        case !Object.keys(Currencies).includes(toCurrency):
                            console.log("Unknown currency");
                            break;

                        case Object.keys(Currencies).includes(toCurrency):
                            let userAmount = input(`Amount: `);
                            if (userAmount >= 1) {
                                let convertedAmount = ((userAmount / Currencies[userInput]) * Currencies[toCurrency]).toFixed(4);
                                console.log(`Result: ${userAmount} ${userInput} equals ${convertedAmount} ${toCurrency}`);
                            } else if (userAmount < 1) {
                                console.log(`The amount cannot be less than 1`);
                            } else {
                                console.log(`The amount has to be a number`);
                            }
                            break;
                    }
                    break;
            }
            break;

        case '2':
            exitProgram = true;
            console.log("Have a nice day!");
            break;

        default:
            console.log("Unknown input");
            userChoice
            break;
    }
}
