import { browser, by, element } from 'protractor';

export class JediAcademyPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('jad-root h1')).getText();
  }
}
