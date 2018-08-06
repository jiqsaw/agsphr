import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitle() {
    return element(by.css('app-root .navbar-brand')).getText();
  }

  formSubmit(value) {
    element(by.css('[name="city"]')).sendKeys(value);
    element(by.css('.btn-primary')).click();
  }

  getTableFirstContent() {
    return element(by.css('.table tbody > tr > td:first-child')).getText();
  }

  getTableRowSize() {
    return element.all(by.css('.table tbody > tr > td')).count();
  }
}
