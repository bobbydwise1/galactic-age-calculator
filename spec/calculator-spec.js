import { Calculator } from "./../src/calculator.js"

describe('Calculator', function() {
  beforeEach(function() {
    const calculator = new Calculator({age: 21});
  });
  it("should take the user's age and store the information.", function() {
    expect(calculator.age).toEqual(21);
  });
  it("should calculate the number of years a person has lived in Mecury years.", function() {
    expect(calculator.mercuryYears()).toEqual(87);
  });
  it("should calculate the number of years a person has lived in Venus years.", function() {
    expect(calculator.venusYears()).toEqual(33);
  });
  it("should calculate the number of years a person has lived in Mars years.", function() {
    expect(calculator.marsYears()).toEqual(11);
  });
  it("should calculate the number of years a person has lived in Jupiter years.", function() {
    expect(calculator.jupiterYears()).toEqual(1);
  });
});
