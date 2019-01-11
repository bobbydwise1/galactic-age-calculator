import { Calculator } from "./../src/calculator.js"

describe('Calculator', function() {
  let calculator = null;
  beforeEach(function() {
    calculator = new Calculator({age: 21, lifeExpectency: 79});
  });
  it("should take the user's age and life expectency and store the information.", function() {
    expect(calculator.age).toEqual(21);
    expect(calculator.lifeExpectency).toEqual(79);
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
  it("should use the person's life expectency to calculate how many years more years they are likely to live", function() {
    expect(calculator.planetaryLifeExpectency(0)).toEqual(241.67);
    expect(calculator.planetaryLifeExpectency(1)).toEqual(93.55);
    expect(calculator.planetaryLifeExpectency(2)).toEqual(30.85);
    expect(calculator.planetaryLifeExpectency(3)).toEqual(4.89);
  });
});
