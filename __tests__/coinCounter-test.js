import { getQuarter } from "../src/main.js"
import { getDime } from "../src/main.js"
import { getNickel } from "../src/main.js"
import { getPenny } from "../src/main.js"



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

  test('should return 10 dimes for a dollar', () => {
   expect(getDime(1)).toEqual(10);
  })

})