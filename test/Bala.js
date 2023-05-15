// Import Builder, By, Key and Until from the selenium library
const { Builder, By, Key, Until } = require("selenium-webdriver");

//Import different assert from chai

const should = require("chai").should();
const expect = require("chai").expect;
const assert = require("assert");

//Mocha

describe("Implement a test of newsletter subscription", () => {
  it("Successfully implement a test case of newsletter subscription", async () => {
    // Start the webdriver and go the web page
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://magento.softwaretestingboard.com");

    //enter the email  id
    await driver
      .findElement(By.id("newsletter"))
      .sendKeys("balavadivel82@gmail.com");

    //click the button to subscribe
    await driver.findElement(By.className("action subscribe primary")).click();

    //find if the message is displayed in the screen
    let subscriptionMsg = await driver
      .findElement(By.className("messages"))
      .getText();
    expect(subscriptionMsg).to.exist;
  });
});
