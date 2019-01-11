const planetValues = [.24, .62, 1.88, 11.86];

export class Calculator {
  constructor(params) {
    this.age = params.age;
    this.lifeExpectency = params.lifeExpectency;
  }

  planetaryYears(planet) {
    return parseFloat((this.age/planetValues[planet]).toFixed(2));
  }

  planetaryLifeExpectency(planet) {
    return parseFloat(((this.lifeExpectency-this.age)/planetValues[planet]).toFixed(2));
  }
}

//86400000*365.2422
