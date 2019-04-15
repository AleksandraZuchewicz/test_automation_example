const { Builder, By, Key, until } = require("selenium-webdriver");
(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    const letters = [
      "0",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z"
    ];
    await driver.get(
      "https://www.topcashback.co.uk/search/merchants/?letter=A"
    );
    await driver.sleep(150 * 1000);
    while (true) {
      for (
        let currentLetter = 0;
        currentLetter < letters.length;
        currentLetter++
      ) {
        let currentPage = 1;
        while (true) {
          await driver.get(
            "https://www.topcashback.co.uk/search/merchants/?letter=" +
              letters[currentLetter] +
              "&page=" +
              currentPage
          );
          let numberOfLetterElements = (await driver.findElements(
            By.className("gecko-col-logo-bd")
          )).length;
          if (numberOfLetterElements === 0) {
            break;
          }
          for (
            let elementNumber = 1;
            elementNumber <= numberOfLetterElements;
            elementNumber++
          ) {
            await driver.sleep(2.5 * 1000);
            await driver.executeScript(
              'document.getElementById("comp-footer-tab").remove();'
            );
            await (await driver.findElement(
              By.css(
                ".gecko-data-table-account-overview tbody tr:nth-child(" +
                  elementNumber +
                  ") a"
              )
            )).click();
            await driver.sleep(4 * 1000);
            let isBirdVisible = await (await driver.findElement(
              By.id("birdClick")
            )).isDisplayed();
            if (isBirdVisible > 0) {
              console.log("Bird clicked");
              await (await driver.findElement(By.id("birdClick"))).click();
              await driver.sleep(10 * 1000);
            }
            await driver.get(
              "https://www.topcashback.co.uk/search/merchants/?letter=" +
                letters[currentLetter] +
                "&page=" +
                currentPage
            );
            await driver.sleep(4 * 1000);
          }
          currentPage++;
        }
      }
    }
  } catch (error) {
    console.log(error);
  } finally {
    await driver.quit();
  }
})();
