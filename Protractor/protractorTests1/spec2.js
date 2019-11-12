// understanding promises

// first example when command is running asynchronously
describe("Undestanding Promises", function () {
    it("opening webside ", function () {
        browser.get('http://angularjs.org');
        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.sleep(9000)
        console.log("last step")
    })
})
// fixed, changed for asynchronous
describe("Undestanding Promises", function () {
    it("opening webside ", function () {
        browser.get('http://angularjs.org');
        browser.get('http://juliemr.github.io/protractor-demo/').then(function () {

            console.log("last step")
        });

    })
})

