import { User } from "./../src/galactic-age.js";

describe ("User", () => {
  let emma;
  beforeEach(() => {
    emma = new User("Emma", 1995, 1, 25);
  });
  
  test("should correctly create a user object with a name and birthday with a month, day, and year", () => {
    expect(emma.name).toEqual("Emma");
    expect(emma.year).toEqual(1995);
    expect(emma.month).toEqual(1);
    expect(emma.day).toEqual(25);
  });

  test("should correctly calculate a user's age in whole number years", () => {
    expect(emma.findAge()).toEqual(25);
  });

  test("should correctly return a user's age in Mercury years", () => {
    expect(emma.findMercury(emma.findAge())).toEqual(104);
  });

  test("should correctly return a user's age in Venus years", () => {
    expect(emma.findVenus(emma.findAge())).toEqual(40);
  });

  test("should correctly return a user's age in Mars years", () => {
    expect(emma.findMars(emma.findAge())).toEqual(13);
  });

  test("should correctly return a user's age in Jupiter years", () => {
    expect(emma.findJupiter(emma.findAge())).toEqual(2);
  });

  test("should estimate a user's life expectancy-neutral", () => {
    expect(emma.lifeExpectancy()).toEqual(71);
  });

  test("should estimate a user's life expectancy-highest possible", () => {
    emma.gender = "female";
    emma.activity = "active";
    emma.environment = "rural";
    emma.stress = "low";
    expect(emma.lifeExpectancy()).toEqual(83);
  });

  test("should estimate a user's life expectancy-lowest possible", () => {
    emma.gender = "male";
    emma.activity = "sedentary";
    emma.environment = "city";
    emma.stress = "high";
    expect(emma.lifeExpectancy()).toEqual(57);
  });

  test("should provide a message regarding remaining life expectancy on each planet-max not reached", () => {
    expect(emma.lifeExpectancyMessage()).toEqual("Your estimated life expectancy is 71 Earth years. You have approximately 191 Mercury years, 74 Venus years, 24 Mars years, 3 Jupiter years, and 46 Earth years left. Live long and prosper!");
  });
  
  test("should provide a message regarding remaining life expectancy on each planet-max reached", () => {
    let bobby = new User("Bobby", 1930, 7, 12);
    bobby.gender = "male";
    bobby.activity = "sedentary";
    bobby.environment = "city";
    bobby.stress = "high";
    console.log(bobby.findAge());
    expect(bobby.lifeExpectancyMessage()).toEqual("Your estimated life expectancy is 57 Earth years. You've been crushing it 134 Mercury years, 52 Venus years, 18 Mars years, 3 Jupiter years, and 32 Earth years longer than expected. Way to beat the odds! Live long and prosper!");
  });
});