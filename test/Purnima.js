const { Builder, By, Key, until } = require('selenium-webdriver');
const should = require('chai').should();
require('dotenv').config();

/*

As a new user of Luma Webstore
I should be able to complete user registration and create an account successfully

*/

describe.only('click on create an account to Luma Demostore', () => {
    context('I fill the user registration form for the new user', () => {
        it('I should be able to create my account', async () => {
            const driver = await new Builder().forBrowser('firefox').build();
            try {
                // Go to the store

                await driver.get('http://magento.softwaretestingboard.com');    // To open the browser and the given link
                await driver.findElement(By.linkText("Create an Account")).click(); // To find a element by lintext as id was not present

                await driver.wait(until.elementLocated(By.id('firstname')), 10000);// Wait until the given element is found - here we are searching by id

                await driver.findElement(By.id('firstname')).sendKeys("Sarah");// Find the element by id and then enter the value by using funnction sendkeys

                await driver.wait(until.elementLocated(By.id('lastname')), 10000);
                await driver.findElement(By.id('lastname')).sendKeys("Andersson");

                await driver.wait(until.elementLocated(By.id('email_address')), 10000);

                await driver.findElement(By.id('email_address')).sendKeys("purnimamanjrekar+magento29@gmail.com");

                await driver.wait(until.elementLocated(By.id('password')), 10000);
                await driver.findElement(By.id('password')).sendKeys("Password@123");

                await driver.wait(until.elementLocated(By.id('password-confirmation')), 10000);
                await driver.findElement(By.id('password-confirmation')).sendKeys("Password@123");

                await driver.findElement(By.xpath("//button[@title='Create an Account']")).click()

                const information =await driver.findElement(By.css('.page-title-wrapper .page-title .base')).getText();
                //Assert
                information.should.contain('Create New Customer Account');

            } finally {
                // await driver.quit();
            }
        });
    });
});

/*

As a user of Luma Webstore
I should be able to contact store for any feedback 

*/

describe.only('I click on contact us to the Luma Demostore', () => {
    context('I fill the feedback form', () => {
        it ('I should be able to submit the form', async () => {
            const driver =await new Builder().forBrowser('firefox').build();
            try{
                // Go to the store

                await driver.get('http://magento.softwaretestingboard.com');    // To open the browser and the given link
                await driver.findElement(By.linkText("Contact Us")).click();     // To find a element by linktext as id was not present
               
                  await driver.wait(until.elementLocated(By.id('name')),10000);    // Wait until the given element is found - here we are searching by id
                  await driver.findElement(By.id('name')).sendKeys("Sarah Andersson"); // Find the element by id and then enter the value by using function sendkeys
                  
                  await driver.wait(until.elementLocated(By.id('email')),10000);
                  await driver.findElement(By.id('email')).sendKeys("purnimamanjrekar+magento26@gmail.com");

                  await driver.wait(until.elementLocated(By.id('telephone')),10000);
                  await driver.findElement(By.id('telephone')).sendKeys("0123456701");

                  await driver.wait(until.elementLocated(By.id('comment')),10000);
                  await driver.findElement(By.id('comment')).sendKeys("Defective item received need to exchange soon call please");

                  await driver.findElement(By.xpath("//button[@title='Submit']")).click()

                  const information =await driver.findElement(By.css('.page-title-wrapper .page-title .base')).getText();
                //Assert
                information.should.contain('Contact Us');

            }finally {
                // await driver.quit();
            }
        });
    });
});
