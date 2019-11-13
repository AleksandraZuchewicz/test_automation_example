
describe("chain locator demo", function () {
    it("search by repeater", function () {
        browser.get('http://juliemr.github.io/protractor-demo/')
        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("5")
        element(by.id("gobutton")).click()
        element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getTex()
    })
})