import { chromium } from "playwright";

const main = async () => {
  const browser = await chromium.launch({
    executablePath: process.env.PLAYWRIGHT_LAUNCH_OPTIONS_EXECUTABLE_PATH,
    headless: false,
  });

  const page = await browser.newPage();
};

await main();
