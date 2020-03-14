const { generateText } = require("./util");

test("should output name and age", () => {
  const text = generateText("laridev", 25);
  expect(text).toBe("laridev (25 years old)");
});

test("should output data-less text without validation", () => {
  const text = generateText("", null);
  expect(text).toBe(" (null years old)");
});
