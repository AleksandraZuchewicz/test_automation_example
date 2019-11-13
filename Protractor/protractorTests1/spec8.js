describe("chain locator demo", function () {
    function calculation(a, b, c) {
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b)
        element.all(by.tagName("option")).each(function (item) {
            item.getAttribute("value").then(function (value) {
                if (value == c) {
                    item.click()
                };
            });
        });
        element(by.id("gobutton")).click()
    }
    it("drop down list", function () {
        browser.get('http://juliemr.github.io/protractor-demo/')
        calculation(1, 2, "ADDITION");
        calculation(4, 7, "DIVISION");
        calculation(6, 1, "MODULO");
        calculation(8, 5, "SUBTRACTION");
        calculation(10, 5, "MODULO");
    })
})


