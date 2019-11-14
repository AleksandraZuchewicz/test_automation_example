describe("Protractor Alert steps", function () {

    it("open non Angular webside", function () {

        browser.waitForAngularEnabled(false)
        browser.get('http://www.qaclickacademy.com/practice.php');
        element(by.id("confirmbtn")).click();
        browser.switchTo().alert().accept().then(function () { // .dismiss() > negative 
            browser.sleep(2000)
        })

    })
})

