import randomNumber from "./app.js";

test("random number form 1 to 1 is 1", () => {
  expect(randomNumber(1, 1)).toBe(1);
});

test("if function return error on NaN arg", () => {
  expect(() =>
    randomNumber("a", 2).toThrow("Arguments must be of type Number")
  );
  expect(() =>
    randomNumber(2, "b").toThrow("Arguments must be of type Number")
  );
});

test("if first argument is lower than second", () => {
  expect(() =>
    randomNumber(4, 3).toThrow(
      "The first argument must have lower value then second"
    )
  );
});

test("if function return value form given range", () => {
  const randomNumberValue = randomNumber(4, 9);
  expect(randomNumberValue).toBeGreaterThan(4);
  expect(randomNumberValue).toBeLessThan(9);
});
