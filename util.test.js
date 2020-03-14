const { generateText, checkAndGenerate } = require("./util");
/**
 * unit tests
 */
test("should output name and age", () => {
  const text = generateText("laridev", 25);
  expect(text).toBe("laridev (25 years old)");
});

test("should output data-less text without validation", () => {
  const text = generateText("", null);
  expect(text).toBe(" (null years old)");
});

/**
 * integration tests
 */
test("should generate a valid text output", () => {
  const text = checkAndGenerate("laridev", 25);
  expect(text).toBe("laridev (25 years old)");
});
