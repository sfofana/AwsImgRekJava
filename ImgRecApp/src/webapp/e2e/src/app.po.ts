import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(route: string) {
    if(route == 'home'){
      return browser.get('/home');
    }
    else if(route == 'compare'){
      return browser.get('/compare');
    }
    else if(route == 'contact'){
      return browser.get('/contact');
    }
    else if(route == 'upload'){
      return browser.get('/upload');
    }
    else {
      return browser.get('/');
    }
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
