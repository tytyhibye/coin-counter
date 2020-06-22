export class CoinCounter{
  constuctor(quarters, dimes, nickles, pennies) {
    this.quarters = quarters;
    this.dimes = dimes;
    this.nickles = nickles;
    this.pennies = pennies;
  }
}
  const coinCounter = parseInt(input) => {
  if (isNaN(input)) {
    return;
  }
  if (input <= 0) {
    return 
  }

