describe("protractor project - qaclickacademy", function () {
    it("fill the submission form", function () {
        browser.get("https://qaclickacademy.github.io/protocommerce/");
        element(by.name("name")).sendKeys("Aleksandra");
        element(by.css("input[name='email'")).sendKeys("aleksandra@gmail.com");
        element(by.id("exampleInputPassword1")).sendKeys("password");
        element(by.id("exampleCheck1")).click();
        element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female")).click();
        element.all(by.name("inlineRadioOptions")).first().click();
        element(by.buttonText("Submit")).click().then(function () {
            element(by.css("div[class*='success']")).getText().then(function (text) {
                console.log(text)
            })
        })
        element(by.name("name")).clear();
        element(by.name("name")).sendKeys("M").then(function () {
            element(by.css("[class='alert alert-danger']")).getText().then(function (text) {
                console.log(text)
            })
        })
        element(by.linkText("Shop")).click();
        element.all(by.tagName("app-card")).each(function (item) {
            item.element(by.css("h4 > a")).getText().then(function (text) {
                if (text == "Samsung Note 8") {
                    item.element(by.css("button[class*='btn-info']")).click()
                    browser.sleep(2000)

                }
            })

        })
        element(by.css('.nav-link.btn.btn-primary')).getText().then(function (text) {
            console.log(text)


        })
    })
})
