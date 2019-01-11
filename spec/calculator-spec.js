import { Calculator } from "./../src/calculator.js"

describe('Calculator', function() {
  it("should take the user's birthday and store the appropriate Date object and other relevant information.", function() {
    const calculator = new Calculator({age: 21});
    expect(calculator.age).toEqual(21);
  });
  it("should calculate the number of years a person has lived in Mecury years.", function() {
    const calculator = new Calculator({age: 21});
    expect(calculator.mercuryYears()).toEqual(87);
  });
  it("should calculate the number of years a person has lived in Venus years.", function() {
    const calculator = new Calculator({age: 21});
    expect(calculator.venusYears()).toEqual(33);
  });
});
