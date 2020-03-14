const { generateText, checkAndGenerate } = require("./util");
const puppeteer = require("puppeteer");
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

/**
 * e2e tesing using puppeteer
 */

test("should click around", async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ["--window-size=1920,1080"]
  });
  const page = await browser.newPage();
  await page.goto(
    "file:///C:/Users/laridev/Documents/coding_projects/tests/js-testing-introduction/index.html"
  );
  await page.click("input#name");
  await page.type("input#name", "baraka");

  await page.click("input#age");
  await page.type("input#age", "21");
  await page.click("#btnAddUser");
  const finalText = await page.$eval(".user-item", el => el.textContent);
  expect(finalText).toBe('baraka (21 years old)')
});
