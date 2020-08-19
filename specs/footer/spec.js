// import { browser, element, by, ElementFinder} from 'protractor'
var footer = require("../../Object_Models/Footer");
const { async } = require("q");
const { expect } = require("chai");
var EC = protractor.ExpectedConditions;

describe('Suite 3: Testing Footer', function() {

  beforeAll(async function() {
    await browser.waitForAngularEnabled(false);
    await browser.get(browser.params.baseUrl);
    await browser.sleep(3000);
  });  

  it('Should Verify Text of "Usecase Section in Footer"', async function() {
    status = await footer.verifyUseCasesSectionText();
    expect(status).to.equal("Overview");
  });

  it('Should Verify "Overview" is clickable', async function() {
    await footer.verifyOverviewisClickable();
    expect(await browser.getCurrentUrl()).to.equal('https://www.postman.com/use-cases/');
  });
  
});