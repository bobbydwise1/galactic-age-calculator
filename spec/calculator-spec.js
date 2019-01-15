import { Calculator } from "./../src/calculator.js";

describe('Calculator', function() {
  let calculator = null;

  beforeEach(function() {
    const tempDate = new Date(2019, 0, 11);
    calculator = new Calculator({year: 1997, month: 2, day: 31, lifeExpectancy: 79, currentDate: tempDate.getTime()});
  });

  it("should take the user's age and life expectency and store the information.", function() {
    expect(calculator.yearsAlive).toBeDefined();
    expect(calculator.expectedLife).toBeDefined();
  });

  it("should calculate the number of years a person has lived in Mecury years.", function() {
    expect(calculator.planetaryYears(0)).toEqual(90.75);
  });

  it("should calculate the number of years a person has lived in Venus years.", function() {
    expect(calculator.planetaryYears(1)).toEqual(35.13);
  });

  it("should calculate the number of years a person has lived in Mars years.", function() {
    expect(calculator.planetaryYears(2)).toEqual(11.59);
  });

  it("should calculate the number of years a person has lived in Jupiter years.", function() {
    expect(calculator.planetaryYears(3)).toEqual(1.84);
  });

  it("should use the person's life expectancy to calculate how many years more years they are likely to live", function() {
    expect(calculator.planetaryLifeExpectancy(0)).toEqual(238.42);
    expect(calculator.planetaryLifeExpectancy(1)).toEqual(92.29);
    expect(calculator.planetaryLifeExpectancy(2)).toEqual(30.44);
    expect(calculator.planetaryLifeExpectancy(3)).toEqual(4.82);
  });
});
