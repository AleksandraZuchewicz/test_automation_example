// function are not allowed to be in it block they should be described in described block, because of scoping
describe("chain locator demo", function () {
    function add(a, b) {
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b)
        element(by.id("gobutton")).click()
    }

    it("all methood", function () {
        browser.get('http://juliemr.github.io/protractor-demo/')
        add(1, 2);
        add(4, 7)
        add(6, 1)
        add(8, 5)
        add(6, 9)
        add(10, 10)

        element.all(by.repeater("result in memory")).count().then(function (text) {
            console.log(text)
        })
        element.all(by.repeater("result in memory")).each(function (item) {
            item.element(by.css("td:nth-child(3)")).getText().then(function (text) {
                console.log(text)
            })
        })
    })
})