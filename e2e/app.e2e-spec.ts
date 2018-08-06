import { AppPage } from './app.po';

describe('angular-weather App', () => {
  let page: AppPage;
  const testValue = 'London';

  beforeEach(() => {
    page = new AppPage();
  });

  it('e2e Title is present', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('AgileSphere coding test - The Weather App');
  });

  it('e2e check city name after form submitted', () => {
    page.navigateTo();
    page.formSubmit(testValue);
    expect(page.getTableFirstContent()).toEqual('London');
  });

  it('e2e check table cells if displaying the next 24 hours', () => {
    page.navigateTo();
    page.formSubmit(testValue);
    expect(page.getTableRowSize()).toEqual(5);
  });

});
