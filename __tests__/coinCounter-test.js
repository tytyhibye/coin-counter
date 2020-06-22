// import { CountCounter } from "../src/main"

describe ("CoinCounter", ()=> {

  test('should verify user input is numbers only', () => {
    const input = 4.99;
    expect(typeof(input)).toEqual("number");
  })
})