const capitalize = require("./capitalize");

test("hello to be equal to Hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});
