const { async } = require("q");
const { brown } = require("color-name");

let EC = protractor.ExpectedConditions;

var Home = function() {

  let apiClientText = element.all(by.className('headers__Paragraph-kmc2rk-4 bEzqVK')).first();
  let readmore = element.all(by.css('a[href="/product/api-client"]')).get(0);
  
    this.verifyApiClientText = async function(){
      var text = await apiClientText.getText();
      return await text;
    };

    this.verifyReadMoreisClickable = async function(){
      // await browser.executeScript("document.querySelector('#rcc-confirm-button').click()");
      // var isFirefox = typeof InstallTrigger !== 'undefined';
      // var isFirefox = await browser.executeScript('navigator.userAgent.indexOf("Chrome") > -1'); 
      // console.log(isFirefox);
      // if (isFirefox)
      // {
      //   await browser.executeScript('arguments[0].click()', readmore);
      // }
      // else
      // {
      //   await browser.actions().mouseMove(readmore).perform();
      // }
      await browser.sleep(5000);
      await EC.elementToBeClickable(readmore);
      await readmore.click();
      await browser.wait(EC.urlIs('https://www.postman.com/product/api-client/'), 10000); 
    };

};
module.exports = new Home();
