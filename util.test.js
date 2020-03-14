const { generateText } = require("./util");

test("should output name and age", () => {
  const text = generateText("laridev", 25);
  expect(text).toBe("laridev (25 years old)");
});
