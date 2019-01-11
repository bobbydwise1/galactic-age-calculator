export class Calculator {
  constructor(params) {
    this.age = params.age;
  }

  mercuryYears() {
    return (this.age/.24).toFixed(2);
  }

  venusYears() {
    return (this.age/.62).toFixed(2);
  }

  marsYears() {
    return (this.age/1.88).toFixed(2);
  }

  jupiterYears() {
    return (this.age/11.86).toFixed(2);
  }
}

//86400000*365.2422
