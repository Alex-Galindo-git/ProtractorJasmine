const { async } = require("q");
const { brown } = require("color-name");


let EC = protractor.ExpectedConditions;

let Header = function() {

  // let products = element.all(by.className('Header__Dropdown-sc-59e0yl-9 cqaFqZ nav-item dropdown')).first();
  let products = element.all(by.css('#navbarDropdown')).first();
  let howCollaborationsWork = element.all(by.css('a[href="/how-api-collaboration-works/"]'));
  let apiPlatform = element.all(by.css('a[href="/api-platform"]'));
  let apiClient = element.all(by.css('a[href="/product/api-client/"]')).first();
  let designAndMock = element.all(by.css('a[href="/features/mock-api/"]')).first();
  let documentation = element.all(by.css('a[href="/api-documentation-tool/"]')).first();
  let monitors = element.all(by.css('a[href="/api-monitoring/"]')).first();
  let automatedTesting = element.all(by.css('a[href="/automated-testing/"]')).first();
  let versionControl = element.all(by.css('a[href="/product/api-versioning/"]')).first();
  let workspaces = element.all(by.css('a[href="/product/workspaces/"]')).first();
  let interceptors = element.all(by.css('a[href="/product/postman-interceptor/"]')).first();


  this.clickProductsFromHeader = async function(){
    await EC.elementToBeClickable(products);
    await products.click();
  };

  this.clickHowCollaborationsWork = async function(){
    await EC.elementToBeClickable(howCollaborationsWork);
    await howCollaborationsWork.click();
};

  this.clickApiPlatform = async function(){
    await EC.elementToBeClickable(apiPlatform);
    await apiPlatform.click();
  };

  this.clickApiClient = async function(){
    await EC.elementToBeClickable(apiClient);
    await apiClient.click();
  };

  this.clickDesignAndMock = async function(){
    await EC.elementToBeClickable(designAndMock);
    await designAndMock.click();
  };

  this.clickDocumentation = async function(){
    await EC.elementToBeClickable(documentation);
    await documentation.click();
  };

  this.clickMonitors = async function(){
    await EC.elementToBeClickable(monitors);
    await monitors.click();
  };

  this.clickAutomatedTesting = async function(){
    await EC.elementToBeClickable(automatedTesting);
    await automatedTesting.click();
  };

  this.clickVersionControl = async function(){
    await EC.elementToBeClickable(versionControl);
    await versionControl.click();
  };

  this.clickWorkspaces = async function(){
    await EC.elementToBeClickable(workspaces);
    await workspaces.click();
  };

  this.clickInterceptors = async function(){
    await EC.elementToBeClickable(interceptors);
    await interceptors.click();
  };

};
module.exports = new Header();
