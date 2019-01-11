import { Calculator } from "./../src/calculator.js"

describe('Calculator', function() {
  beforeEach(function() {
    const calculator = new Calculator({age: 21});
  });
  it("should take the user's age and store the information.", function() {
    expect(calculator.age).toEqual(21);
  });
  it("should calculate the number of years a person has lived in Mecury years.", function() {
    expect(calculator.planetaryYears(0)).toEqual(87.5);
  });
  it("should calculate the number of years a person has lived in Venus years.", function() {
    expect(calculator.planetaryYears(1)).toEqual(33.87);
  });
  it("should calculate the number of years a person has lived in Mars years.", function() {
    expect(calculator.planetaryYears(2)).toEqual(11.17);
  });
  it("should calculate the number of years a person has lived in Jupiter years.", function() {
    expect(calculator.planetaryYears(3)).toEqual(1.77);
  });
});
