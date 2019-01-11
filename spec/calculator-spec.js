import { Calculator } from "./../src/calculator.js"

describe('Calculator', function() {
  it("should take the user's birthday and store the appropriate Date object and other relevant information", function() {
    let calculator = new Calculator({day: 31, month: 2, year: 1997});
    expect(calculator.birthday.getDate()).toEqual(31);
    expect(calculator.birthday.getMonth()).toEqual(2);
    expect(calculator.birthday.getFullYear()).toEqual(1997);
  });
});
