describe("Protractor Element Demo", function () {
    it("opening webside ", function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("5")
        element(by.id("gobutton")).click()

        element(by.css("h2[class='ng-binding']")).getText().then(function (tekst) {
            console.log(tekst)

        })
        expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("8")
    })
})