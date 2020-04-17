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
    let subtractNowObject = new Date(subtractNow);
    let subtractEpoch = Math.floor(subtractNowObject.getUTCFullYear() - 1970);
    return subtractEpoch;
  }
}