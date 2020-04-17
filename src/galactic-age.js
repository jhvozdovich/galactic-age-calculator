export class User {
  constructor(name, year, month, day) {
    this.name = name;
    this.year = year;
    this.month = month;
    this.day = day;
    this.gender;
    this.activity;
    this.environment;
    this.stress;
  }

  findAge() {
    let dateObject = new Date(this.year, this.month, this.day);
    let subtractNow = Date.now() - dateObject;
    let roundYear = Math.floor(subtractNow / (365 * 24 * 60 * 60 * 1000));
    return roundYear;
  }
  
  findMercury(age) {
    let mercuryAge = Math.floor(age / 0.24);
    return mercuryAge;
  }

  findVenus(age) {
    let venusAge = Math.floor(age / 0.62);
    return venusAge;
  }

  findMars(age) {
    let marsAge = Math.floor(age / 1.88);
    return marsAge;
  }

  findJupiter(age) {
    let jupiterAge = Math.floor(age / 11.86);
    return jupiterAge;
  }

  lifeExpectancy() {
    let lifeExpectancy = 71;

    if (this.gender === "male") {
      lifeExpectancy -= 1;
    } else if (this.gender === "female") {
      lifeExpectancy += 1;
    }

    if (this.activity === "sedentary") {
      lifeExpectancy -= 5;
    } else if (this.activity === "active") {
      lifeExpectancy += 5;
    }

    if (this.environment === "city") {
      lifeExpectancy -= 2;
    } else if (this.environment === "rural") {
      lifeExpectancy += 1;
    }

    if (this.stress === "low") {
      lifeExpectancy += 5;
    } else if (this.stress === "high") {
      lifeExpectancy -= 6;
    }

    return lifeExpectancy;
  }

  lifeExpectancyMessage() {
    let lifeExpectancy = this.lifeExpectancy();
    let age = this.findAge();
    let remainingLifeEarth = lifeExpectancy - age;
    let remainingLifeMercury = this.findMercury(remainingLifeEarth);
    let remainingLifeVenus = this.findVenus(remainingLifeEarth);
    let remainingLifeMars = this.findMars(remainingLifeEarth);
    let remainingLifeJupiter = this.findJupiter(remainingLifeEarth);
    if (this.findAge() < lifeExpectancy) {
      let message = `Your estimated life expectancy is ${lifeExpectancy} Earth years. You have approximately ${remainingLifeMercury} Mercury years, ${remainingLifeVenus} Venus years, ${remainingLifeMars} Mars years, ${remainingLifeJupiter} Jupiter years, and ${remainingLifeEarth} Earth years left. Live long and prosper!`;
      return message;
    } else {
      let message = `Your estimated life expectancy is ${lifeExpectancy} Earth years. You've been crushing it ${-remainingLifeMercury} Mercury years, ${-remainingLifeVenus} Venus years, ${-remainingLifeMars} Mars years, ${-remainingLifeJupiter} Jupiter years, and ${-remainingLifeEarth} Earth years longer than expected. Way to beat the odds! Live long and prosper!`;
      return message;
    }
  }
}

