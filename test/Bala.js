// Implement a test of newsletter subscription
// Import Builder, By, Key and Until from the selenium library
const { Builder, By, Key, until } = require("selenium-webdriver");

//Import assert from chai

const expect = require("chai").expect;

//test grouping: newsletter subscription
describe.skip("Subscribe to newsletter", () => {
  //Test case:
  context("I enter my email in the newsletter form", () => {
    it(" I should be subscribed to the newsletter", async () => {
      // Start the webdriver and go the web page
      let driver = await new Builder().forBrowser("firefox").build();
      try {
        //Go to the home page
        await driver.get("https://magento.softwaretestingboard.com");

        //enter the email  id
        await driver
          .findElement(By.id("newsletter"))
          .sendKeys("balavadivel82@gmail.com");

        //click the button to subscribe
        await driver
          .findElement(By.className("action subscribe primary"))
          .click();

        //find if the message is displayed in the screen
        let subscriptionMsg = await driver
          .findElement(By.className("messages"))
          .getText();
        expect(subscriptionMsg).to.exist;
      } finally {
        await driver.quit();
      }
    });
  });
});

// Test grouping: Sort by price
describe.skip("Sort By Price", () => {
  //Test Case:
  context("I sort the items by Price", () => {
    it("I should be able to select value as price", async () => {
      // Start the webdriver and go the web page
      let driver = await new Builder().forBrowser("firefox").build();
      try {
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
      } finally {
        await driver.quit();
      }
    });
  });
});
