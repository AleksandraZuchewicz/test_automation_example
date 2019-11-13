describe("Actions Demo", function () {
    it("open Posse webside", function () {
        browser.get('https://posse.com')
        element(by.model("userInputQuery")).sendKeys("river");
        browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("London")).perform();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function () {
            browser.sleep(5000)
        })
        element.all(by.css("a[ng-href='London'")).click()
        browser.getAllWindowHandles().then(function () {
            browser.switchTo().window(handle[1])
        })


    })
})