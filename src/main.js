// export coinCounter();

// const result = userInput(); {
//   console.log(`Your change consists of ${quarters} quarters, ${dimes} dimes, ${nickels} nickels and ${pennies} pennies.`);
// }

// const userInput = (input) => {
//   newInput = parseInt(input * 100);
//   coinCounter(newInput);
// }

// const coinCounter = (input) => {
//   // const quarters = input / 25;

//   if (isNaN(input)) {
//     return;
//   }
//   if (input < 5) {
//     return result;
//   }
//   if (input % 25 > 0) {
//     const quarters = input / 25;
//     return coinCounter(quarters % 25);
//   }
//   if (input % 10 > 0) {
//     const dimes = input / 10;
//     return coinCounter(dimes % 10);
//   }
//   if (input % 5 > 0) {
//     const nickels = input / 5;
//     const pennies = nickels % 5;
//     return coinCounter(pennies);
//   }
//   else {
//     return coinCounter(0);
//   }
// };

//for example, creating something such that (25 cents) => [1,0,0,0]
//where array order represents [quarters, dimes, nickels, pennies]
//and 37 => [1,1,0,2]


// way that Travis helped them with

// export const coinCounter = (money, moneyArray = [0, 0, 0, 0]) => {
//   money = Math.ceil(money.toFixed(2) * 100) / 100;
//   const val = [0, 0];
//   if (money === 0) {
//     console.log(moneyArray);
//     return moneyArray;
//   } else if (money >= .25) {
//     val[0] = .25;
//     val[1] = 0;
//   } else if (money >= .1) {
//     val[0] = .1;
//     val[1] = 1;
//   } else if (money >= .05) {
//     val[0] = .05;
//     val[1] = 2;
//   } else {
//     val[0] = .01;
//     val[1] = 3;3
//   }
//   money -= val[0];
//   moneyArray[val[1]] += 1;
//   return coinCounter(money, moneyArray);
// }

const changer = (coinVal) => {
  return (input) => {
    const newInput = Math.ceil(input.toFixed(2) * 100) / 100;
    return newInput / coinVal;
  }
}

export const getQuarter = changer(.25);
export const getDime = changer(.10);
export const getNickel = changer(.05);
export const getPenny = changer(.01);




// const doubler = multipler(2);

// doubler(userInput)
// doubler = (numberToMultiply) => {
//     return numberToMultiplyBy * numberToMultiply;
//   }

// doubler = (numberToMultiply) => {
//     return 2 * numberToMultiply;
//   }




// const multiplier = (numberToMultiplyBy) => {
//   return (numberToMultiply) => {
//     return numberToMultiplyBy * numberToMultiply;
//   }
// }

// const doubler = multiplier(2)(2);
// const tripler = multiplier(3);
// const quadrupler = multiplier(4);

// (numberToMultiply) => {
//   return 2 * numberToMultiply;
// }


//  3 lines shorter but harder to read

// const coinCounter = (money, moneyArray = [0, 0, 0, 0], index = 0) => {
//   money = Math.ceil(money.toFixed(2) * 100) / 100;
//   const coinVals = [.25, .1, .05, .01];

//   if (money <= 0) {
//     console.log(moneyArray);
//     return moneyArray;
//   } else if (money >= coinVals[index]) {
//     val = [coinVals[index], index];
//     console.log(val);
//   } else {
//     index += 1;
//     return coinCounter(money, moneyArray, index);
//     console.log(index);
//   }
//   money -= val[0];
//   moneyArray[val[1]] += 1;
//   return coinCounter(money, moneyArray, index);
// }


// coinCounter(.66);

// totalAmountInPennies = parseInt(input * 100);

// const changeMaker = (totalAmountInPennies, coinChangeArr = [], counter = 0) => {
  
// if (isNaN(totalAmountInPennies)) {
//   return;
// }
// if (totalAmountInPennies <= 0) {
//   return coinChangeArr;
// }
// else {
//   if(totalAmountInPennies % 25 >= 0)
//   return changeMaker(counter + 1);
// }
// coinChangArr.push(counter)
// }