export class User {
  constructor(name, year, month, day) {
    this.name = name;
    this.year = year;
    this.month = month;
    this.day = day;
  }

  findAge() {
    let dateObject = new Date(this.year, this.month, this.day);
    let subtractNow = Date.now() - dateObject;
    let roundYear = Math.floor(subtractNow / (365 * 24 * 60 * 60 * 1000));
    return roundYear;
  }

  findMercury() {
    let age = this.findAge();
    let mercuryAge = Math.floor(age / 0.24);
    return mercuryAge;
  }
}