const { Builder, By, Key, until } = require("selenium-webdriver");
(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://translate.google.pl/");
    await driver.sleep(1000);
    let kochamCie = await driver.findElement(By.id("source"));
    await kochamCie.sendKeys("Kocham Cie");
    await driver.sleep(1000);
    await driver
      .findElement(
        By.className(
          "src-tts left-positioned ttsbutton jfk-button-flat source-or-target-footer-button jfk-button"
        )
      )
      .click();
    await driver.sleep(5000);
  } finally {
    await driver.quit();
  }
})();
