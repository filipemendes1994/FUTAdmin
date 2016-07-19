import { FUTAdminPage } from './app.po';

describe('futadmin App', function() {
  let page: FUTAdminPage;

  beforeEach(() => {
    page = new FUTAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
