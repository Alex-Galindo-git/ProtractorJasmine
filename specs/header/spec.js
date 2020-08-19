var header = require("../../Object_Models/Header");
const { async } = require("q");
const { expect } = require("chai");
var EC = protractor.ExpectedConditions;
describe('Suite 1: Testing Header', function() {

    beforeAll(async function() {
      await browser.waitForAngularEnabled(false);
      await browser.get(browser.params.baseUrl);
      await browser.sleep(3000);
      await browser.executeScript("document.querySelector('#rcc-confirm-button').click()");
      await browser.sleep(2000);
    });  
    
    it('Should Click "Products" Option From Header', async function() {
      await header.clickProductsFromHeader();
      await browser.sleep(3000);
    });

    it('Should Verify Working of "How Collaborations Work From Products"', async function() {
      await header.clickHowCollaborationsWork();
      browser.wait(EC.urlIs('https://www.postman.com/how-api-collaboration-works/'), 10000);
      expect(await browser.getCurrentUrl()).to.be.a('string', 'https://www.postman.com/how-api-collaboration-works/');
      await browser.sleep(3000);
    });

    it('Should Click "Products" Option From Header', async function() {
      await header.clickProductsFromHeader();
      await browser.sleep(3000);
    });

    it('Should Verify Working of "Api Platform"', async function() {
      await header.clickApiPlatform();
      await browser.wait(EC.urlIs('https://www.postman.com/api-platform/'), 10000);
      expect(await browser.getCurrentUrl()).to.equal('https://www.postman.com/api-platform/');
      await browser.sleep(3000);
    });

    it('Should Click "Products" Option From Header', async function() {
      await header.clickProductsFromHeader();
      await browser.sleep(3000);
    });

    it('Should Verify Working of "Api Client"', async function() {
      await header.clickApiClient();
      await browser.wait(EC.urlIs('https://www.postman.com/product/api-client/'), 10000);
      expect(await browser.getCurrentUrl()).to.equal('https://www.postman.com/product/api-client/');
      await browser.sleep(3000);
    });

    it('Should Click "Products" Option From Header', async function() {
      await header.clickProductsFromHeader();
      await browser.sleep(3000);
    });

    it('Should Verify Working of "Design And Mock"', async function() {
      await header.clickDesignAndMock();
      await browser.wait(EC.urlIs('https://www.postman.com/features/mock-api/'), 10000);
      expect(await browser.getCurrentUrl()).to.equal('https://www.postman.com/features/mock-api/');
      await browser.sleep(3000);
    });

    it('Should Click "Products" Option From Header', async function() {
      await header.clickProductsFromHeader();
      await browser.sleep(3000);
    });

    it('Should Verify Working of "Documentation"', async function() {
      await header.clickDocumentation();
      await browser.wait(EC.urlIs('https://www.postman.com/api-documentation-tool/'), 10000);
      expect(await browser.getCurrentUrl()).to.equal('https://www.postman.com/api-documentation-tool/');
      await browser.sleep(3000);
    });

    it('Should Click "Products" Option From Header', async function() {
      await header.clickProductsFromHeader();
      await browser.sleep(3000);
    });

    it('Should Verify Working of "Monitors"', async function() {
      await header.clickMonitors();
      await browser.wait(EC.urlIs('https://www.postman.com/api-monitoring/'), 10000);
      expect(await browser.getCurrentUrl()).to.equal('https://www.postman.com/api-monitoring/');
      await browser.sleep(3000);
    });

    it('Should Click "Products" Option From Header', async function() {
      await header.clickProductsFromHeader();
      await browser.sleep(3000);
    });

    it('Should Verify Working of "Automated testing"', async function() {
      await header.clickAutomatedTesting();
      await browser.wait(EC.urlIs('https://www.postman.com/automated-testing/'), 10000);
      expect(await browser.getCurrentUrl()).to.equal('https://www.postman.com/automated-testing/');
      await browser.sleep(3000);
    });

    it('Should Click "Products" Option From Header', async function() {
      await header.clickProductsFromHeader();
      await browser.sleep(3000);
    });

    it('Should Verify Working of "Version Control"', async function() {
      await header.clickVersionControl();
      await browser.wait(EC.urlIs('https://www.postman.com/product/api-versioning/'), 10000);
      expect(await browser.getCurrentUrl()).to.equal('https://www.postman.com/product/api-versioning/');
      await browser.sleep(3000);
    });

    it('Should Click "Products" Option From Header', async function() {
      await header.clickProductsFromHeader();
      await browser.sleep(3000);
    });

    it('Should Verify Working of "Workspaces"', async function() {
      await header.clickWorkspaces();
      await browser.wait(EC.urlIs('https://www.postman.com/product/workspaces/'), 10000);
      expect(await browser.getCurrentUrl()).to.equal('https://www.postman.com/product/workspaces/');
      await browser.sleep(3000);
    });

    it('Should Click "Products" Option From Header', async function() {
      await header.clickProductsFromHeader();
      await browser.sleep(3000);
    });

    it('Should Verify Working of "Interceptors"', async function() {
      await header.clickInterceptors();
      await browser.wait(EC.urlIs('https://www.postman.com/product/postman-interceptor/'), 10000);
      expect(await browser.getCurrentUrl()).to.equal('https://www.postman.com/product/postman-interceptor/');
      await browser.sleep(3000);
    });

});


