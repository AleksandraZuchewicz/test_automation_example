describe("Protractor Element Demo", function () {
    it("opening webside ", function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("5").then(function () {
            browser.sleep(5000)
        })

    })
})