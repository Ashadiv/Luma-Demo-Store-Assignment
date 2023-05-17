// Implement a test of newsletter subscription
// Import Builder, By, Key and Until from the selenium library
const { Builder, By, Key, until, WebElement } = require("selenium-webdriver");

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

// Implement a test of Sort by
describe("Implement a test of Sort By", () => {
  it("Successfully implement a test case of Sort By", async () => {
    // Start the webdriver and go the web page
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://magento.softwaretestingboard.com");
    //select the menu for Men
    driver.findElement(By.linkText("Men")).click();
    //wait until next menu is loaded
    await driver.wait(until.elementLocated(By.linkText("Tops")), 10000);
    //select the menu for Tops
    driver.findElement(By.linkText("Tops")).click();
    //wait until next menu is loaded
    await driver.wait(until.elementLocated(By.linkText("Jackets")), 10000);
    //select the menu for Jackets
    driver.findElement(By.linkText("Jackets")).click();
    //wait until next menu is loaded
    await driver.wait(until.elementLocated(By.id("sorter")), 10000);
    //select the Dropdown
    await driver.findElement(By.id("sorter")).click();
    //wait
    await driver.sleep(1000);
    //select the option Price
    await driver.findElement(By.id("sorter")).sendKeys("Price");

    //wait
    await driver.sleep(2000);
    //get the selected dropdown value
    var optionVal = await driver
      .findElement(By.xpath("//select[@id='sorter']//option[@selected]"))
      .getText();
    //check if the selected value is equal to what is send
    expect(optionVal).to.equal("Price");
  });
});
