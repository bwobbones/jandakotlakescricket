import { CricketPage } from './app.po';

describe('cricket App', () => {
  let page: CricketPage;

  beforeEach(() => {
    page = new CricketPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
