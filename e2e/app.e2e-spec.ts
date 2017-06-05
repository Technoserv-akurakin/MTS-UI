import { ReactivFormPage } from './app.po';

describe('reactiv-form App', () => {
  let page: ReactivFormPage;

  beforeEach(() => {
    page = new ReactivFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
