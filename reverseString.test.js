const reverseString = require("./reverseString");

test("Hey There to be equal to yeH erehT", () => {
  expect(reverseString("Hey There")).toBe("erehT yeH");
});
