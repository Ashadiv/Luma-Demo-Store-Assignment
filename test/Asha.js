const { Builder, By, Key, until } = require ('selenium-webdriver');
const should = require('chai').should();
const expect = require("chai").expect;
require('dotenv').config();

//login data
let user =process.env.USER;
let pass = process.env.PASS;

/*

As a new user of Luma Webstore
I would like to be able to login and add user deatils in account successfully

*/

 //.only() -run only this test block //  .skip()  --skip this specific  test
describe('login to Luma Demostore', () => {
    context('I click on login and enter my credentials', () => {
        it (' I should be logged in and see my profile', async () => {
            const driver =await new Builder().forBrowser('firefox').build();
            try{
                // Go to the store
                await driver.get('http://magento.softwaretestingboard.com');
                await driver.findElement(By.css('.authorization-link > a:nth-child(1)')).click();

                //Get the form- wait for the input field to load
                await driver.wait(until.elementLocated(By.id('email')),10000);

                //send keys
                await driver.findElement(By.id('email')).sendKeys("asha.r.divakar@gmail.com");
                await driver.findElement(By.id('pass')).sendKeys("Divith@2427");

                //Click login button
                await driver.findElement(By.css('#send2')).click();

                //Implicit  wait to allow site to load
                await driver.sleep(1000);

                // get to my profile
                await driver.wait(until.elementLocated(By.css('.action.switch')),20000);
                await driver.findElement(By.css('.action.switch')).click();

                
                await driver.wait(until.elementLocated(By.css('a[href$="/customer/account/"]')),10000);
                await driver.findElement(By.css('a[href$="/customer/account/"]')).click();

                // Get and check the information
                await driver.wait(until.elementLocated(By.css('.box-information .box-content p')),10000);
                const information =await driver.findElement(By.css('.box-information .box-content p')).getText();

                await driver.wait(until.elementLocated(By.linkText('Edit Address')),10000);
                await driver.findElement(By.linkText('Edit Address')).click()     

                await driver.wait(until.elementLocated(By.id('firstname')),10000);
                await driver.findElement(By.id('firstname')).clear();
                await driver.findElement(By.id('firstname')).sendKeys("Asha");

                await driver.wait(until.elementLocated(By.id('lastname')),10000);
                await driver.findElement(By.id('lastname')).clear();
                await driver.findElement(By.id('lastname')).sendKeys("Divakar");
               

                await driver.wait(until.elementLocated(By.id('company')),10000);
                await driver.findElement(By.id('company')).clear();
                await driver.findElement(By.id('company')).sendKeys("XYZ company");
               

                await driver.wait(until.elementLocated(By.id('telephone')),10000);
                await driver.findElement(By.id('telephone')).clear();
                await driver.findElement(By.id('telephone')).sendKeys("07777777777");
            
                
                await driver.wait(until.elementLocated(By.id('street_1')),10000);
                await driver.findElement(By.id('street_1')).clear();
                await driver.findElement(By.id('street_1')).sendKeys("Hostervadersgatan 69");

                await driver.wait(until.elementLocated(By.id('city')),10000);
                await driver.findElement(By.id('city')).clear();
                await driver.findElement(By.id('city')).sendKeys("Gothenburg");


               // await driver.wait(until.elementLocated(By.id('region_id')),10000);
               // await driver.findElement(By.id('region_id')).clear();
                //await driver.findElement(By.id('region_id')).sendKeys("Vastra Gotland");
                
                await driver.wait(until.elementLocated(By.id('zip')),10000);
                await driver.findElement(By.id('zip')).clear();
                await driver.findElement(By.id('zip')).sendKeys("41121");

               // await driver.wait(until.elementLocated(By.id('country')),10000);
              //  await driver.findElement(By.id('country')).clear();
              //  await driver.findElement(By.id('country')).selectByVisibleText("Sweden");
                                    
                
                await driver.findElement(By.xpath("//button[@title='Save Address']")).click()
                
            }finally {

                
                // await driver.quit();
            }
        });
    });
});
 

describe('Advance Search to Luma Demostore', () => {
    context('I click on Advance Search and enter product details', () => {
        it (' I should be tosearch the specific product', async () => {
            const driver =await new Builder().forBrowser('firefox').build();
            try{
                // Go to the store
                await driver.get('http://magento.softwaretestingboard.com');


              // await driver.wait(until.elementLocated(By.xpath("//div[@class='footer content']//a[contains(text(Advanced Search))).click();
              await driver.findElement(By.xpath("//html/body/div[1]/footer/div/ul/li[3]/a")).click()   ;
              

                await driver.wait(until.elementLocated(By.id('name')),10000);
                await driver.findElement(By.id('name')).sendKeys("Antonia Racer Tank");

              
                await driver.wait(until.elementLocated(By.id('sku')),10000);  
                await driver.findElement(By.id('sku')).sendKeys("WT08");

               await driver.wait(until.elementLocated(By.xpath("//input[@name='price[from]']")),10000);
               await driver.findElement(By.xpath("//input[@name='price[from]']")).sendKeys(10)

               await driver.wait(until.elementLocated(By.xpath("//input[@name='price[to]']")),10000);
               await driver.findElement(By.xpath("//input[@name='price[to]']")).sendKeys(900)

               await driver.findElement(By.xpath("//div[@class='primary']//button[@title='Search']/span")).click()
                
            }finally {

                // await driver.quit();
            }
        });
    });
});


