const planetValues = [.24, .62, 1.88, 11.86];

export class Calculator {
  constructor(params) {
    let currentDate = Date.now();
    if(params.currentDate) {
      currentDate = params.currentDate;
    }
    const birthDate = new Date(params.year, params.month, params.day);
    const deathDate = new Date(parseInt(params.year + params.lifeExpectancy), params.month, params.day);
    this.yearsAlive = parseFloat(((currentDate-birthDate.getTime())/31556926080).toFixed(2));
    this.expectedLife = parseFloat(((deathDate.getTime()-currentDate)/31556926080).toFixed(2));
  }

  planetaryYears(planet) {
    return parseFloat((this.yearsAlive/planetValues[planet]).toFixed(2));
  }

  planetaryLifeExpectancy(planet) {
    return parseFloat((this.expectedLife/planetValues[planet]).toFixed(2));
  }
}
