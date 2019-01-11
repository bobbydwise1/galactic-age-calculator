export class Calculator {
  constructor(params) {
    let day = params.day;
    let month = params.month;
    let year = params.year;
    this.birthday = new Date(year, month, day);
  }
}
