const { async } = require("q");
const { brown } = require("color-name");

let EC = protractor.ExpectedConditions;

let Footer = function() {

  let usecasesOverview = element.all(by.css('a[href="/use-cases/"]')).get(0);
  // var usecasesOverview = element.all(by.className('footer__ColumnLink-mv6rca-3 fNREEk')).get(18);
  
    this.verifyUseCasesSectionText = async function(){
      var text = await usecasesOverview.getText();
      return await text;
    };

    this.verifyOverviewisClickable = async function(){
      // await EC.elementToBeClickable(cookies);
      // await browser.actions().mouseMove(cookies).perform();
      // await cookies.click();
      // await browser.sleep(1000);
      // await browser.actions().mouseMove(usecasesOverview).perform();
      // await browser.sleep(5000);
      await EC.elementToBeClickable(usecasesOverview);
      await usecasesOverview.click();
      await browser.wait(EC.urlIs('https://www.postman.com/use-cases/'), 10000); 
    };

};
module.exports = new Footer();
