import { getQuarter } from "../src/main.js"

describe("CoinCounter", () => {

  test('should verify user input is numbers only', () => {
    const input = 4.99;
    expect(typeof (input)).toEqual("number");
  })

  test('should verify if input is not blank', () => {
    const input = parseInt("");
    expect(input).toEqual(NaN);
  })

  test('should return 4 quarters for a dollar', () => {
    expect(getQuarter(1)).toEqual(4);
  })

})