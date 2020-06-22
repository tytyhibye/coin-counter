// export coinCounter;

const result = userInput(); {
  console.log(`Your change consists of ${quarters} quarters, ${dimes} dimes, ${nickels} nickels and ${pennies} pennies.`);
}

const userInput = (input) => {
  newInput = parseInt(input * 100);
  coinCounter(newInput);
}

const coinCounter = (input) => {
  // const quarters = input / 25;

  if (isNaN(input)) {
    return;
  }
  if (input < 5) {
    return result;
  }
  if (input % 25 > 0) {
    const quarters = input / 25;
    return coinCounter(quarters % 25);
  }
  if (input % 10 > 0) {
    const dimes = input / 10;
    return coinCounter(dimes % 10);
  }
  if (input % 5 > 0) {
    const nickels = input / 5;
    const pennies = nickels % 5;
    return coinCounter(pennies);
  }
  else {
    return coinCounter(0);
  }
};

