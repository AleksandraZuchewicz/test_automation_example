const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://news.ycombinator.com/');
    await driver.sleep(1000);
    let elements = await driver.findElements(By.className("storylink"));
    for (var i = 0; i < elements.length; i++) {
      await elements[i].click();
      await driver.sleep(1000);
      await driver.get('https://news.ycombinator.com/')
      await driver.sleep(1000);
      elements = await driver.findElements(By.className("storylink"));
    }
    //await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    //await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    await driver.quit();
  }
})();
