
describe("non angular app", function () {
    it("opening webside", function () {
        browser.waitForAngularEnabled(false) // it turning off waiting for angular elements 
        browser.get("http://google.com")
    })
})