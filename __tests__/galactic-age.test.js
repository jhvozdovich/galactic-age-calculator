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


});