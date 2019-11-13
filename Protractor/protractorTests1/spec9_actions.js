describe("Actions Demo", function () {
    it("open Posse webside", function () {
        browser.get('https://posse.com')
        element(by.model("userInputQuery")).sendKeys("river");
        browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("London")).perform();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function () {
            browser.sleep(5000)
        })
        expect(element.all(by.css("div[ng-mouseover = 'onSearchResultOver']")).count()).toEqual(7)


    })
})