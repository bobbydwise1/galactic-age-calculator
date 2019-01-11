const planetValues = [.24, .62, 1.88, 11.86}];

export class Calculator {
  constructor(params) {
    this.age = params.age;
  }

  planetaryYears(planet) {
    return (this.age/planetValues[planet]).toFixed(2);
  }
}

//86400000*365.2422
