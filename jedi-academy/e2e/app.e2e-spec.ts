import { JediAcademyPage } from './app.po';

describe('jedi-academy App', () => {
  let page: JediAcademyPage;

  beforeEach(() => {
    page = new JediAcademyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to jad!!');
  });
});
