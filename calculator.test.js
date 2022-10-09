const calculator = require("./calculator");

test("2 + 2 to be equal to 4", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test("2 - 2 to be equal to 0", () => {
  expect(calculator.subtract(2, 2)).toBe(0);
});

test("10 * 5 to be equal to 50", () => {
  expect(calculator.multiply(10, 5)).toBe(50);
});

test("8 / 2 to be equal to 4", () => {
  expect(calculator.divide(8, 2)).toBe(4);
});
