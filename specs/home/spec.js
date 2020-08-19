// import { browser, element, by, ElementFinder} from 'protractor'
var home = require("../../Object_Models/Home");
const { async } = require("q");
const { expect } = require("chai");
var EC = protractor.ExpectedConditions;

describe('Suite 2: Testing Home', function() {

  beforeAll(async function() {
    await browser.waitForAngularEnabled(false);
    await browser.get(browser.params.baseUrl);
    await browser.sleep(3000);
  });  
  
  it('Should Verify Text of "Api Client in Home Section"', async function() {
    text = await home.verifyApiClientText();
    expect(text).to.equal("Quickly and easily send REST, SOAP, and GraphQL requests directly within Postman.");
  });
  
  it('Should Verify "Read More" is clickable', async function() {
    await home.verifyReadMoreisClickable();
    expect(await browser.getCurrentUrl()).to.be.a('string', 'https://www.postman.com/product/api-client/');
  });

});
