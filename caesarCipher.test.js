const caesarCipher = require("./caesarCipher");

test("hello world! to be equal to ifmmp ypsme!", () => {
  expect(caesarCipher("hello world!", 1)).toBe("ifmmp xpsme!");
});
