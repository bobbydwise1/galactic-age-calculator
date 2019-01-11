const planetValues = [.24, .62, 1.88, 11.86];

export class Calculator {
  constructor(params) {
    const birthDate = new Date(params.year, params.month, params.day);
    const deathDate = new Date(parseInt(params.year + params.lifeExpectancy), params.month, params.day);
    this.yearsAlive = parseFloat(((Date.now()-birthDate.getTime())/31556926080).toFixed(2));
    this.expectedLife = parseFloat(((deathDate.getTime()-Date.now())/31556926080).toFixed(2));
  }

  planetaryYears(planet) {
    return parseFloat((this.yearsAlive/planetValues[planet]).toFixed(2));
  }

  planetaryLifeExpectancy(planet) {
    return parseFloat((this.expectedLife/planetValues[planet]).toFixed(2));
  }
}
