import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should route to the corresponding pages', () => {
    page.navigateTo('home');
    const compare = element(by.css('app-root a[id=compare]'));
    const upload = element(by.css('app-root a[id=upload]'));
    const contact = element(by.css('app-root a[id=contact]'));
    compare.click();
    upload.click();
    contact.click();
    expect(compare.getText()).toContain('Compare');
    expect(upload.getText()).toContain('Upload');
    expect(contact.getText()).toContain('Contact');
  });

  it('should click button on home page to get access', () => {
    page.navigateTo('home');
    browser.sleep(300);
    const title = element(by.css('app-home h3[id=title]'));
    const btn = element(by.css('app-home a[id=access]'));
    btn.click();
    browser.sleep(3000);
  });

  it('should input image names on the compare page and send data to backend', () => {
    page.navigateTo('compare');
    const img1 = element(by.css('app-compare input[id=img1]'));
    const img2 = element(by.css('app-compare input[id=img2]'));
    const btn = element(by.css('app-compare a[id=btn]'));
    const spinner = element(by.css('app-compare div[role=status]'));
    const success = element(by.css('app-compare h5[class=success]'));
    img1.sendKeys('joe1');
    img2.sendKeys('joe2');
    btn.click();
    expect(spinner.isPresent()).toBe(false);
    expect(success.isPresent()).toBe(false);
    browser.sleep(5000);
  });

  it('should input name and file on the upload page and send data to backend', () => {
    page.navigateTo('upload');
    const name = element(by.css('app-upload input[id=name]'));
    const file = element(by.css('app-upload input[type=file]'));
    const image = 'C:/Users/sufya/Documents/Repository/'+
    'ImgRecApp/Java/AwsImgRekJava/ImgRecApp/src/webapp/'+
    'src/assets/images/awslogo.PNG';
    const btn = element(by.css('app-upload a[id=btn]'));   
    const spinner = element(by.css('app-upload div[role=status]'));
    const success = element(by.css('app-upload h5[class=success]'));
    name.sendKeys('spec');
    file.sendKeys(image);
    btn.click();
    expect(spinner.isPresent()).toBe(false);
    expect(success.isPresent()).toBe(false);
    browser.sleep(5000);
  });

  it('should submit form and send email', () => {
    page.navigateTo('contact');
    const name = element(by.css('app-contact input[id=name]'));
    const email = element(by.css('app-contact input[id=email]'));
    const phone = element(by.css('app-contact input[id=phone]'));
    const subject = element(by.css('app-contact input[id=subject]'));
    const message = element(by.css('app-contact textarea[id=message]'));
    const btn = element(by.css('app-contact button[type=submit]'));
    const spinner = element(by.css('app-contact div[role=status]'));
    const success = element(by.css('app-contact p[class=success]'));
    name.sendKeys('Spec');
    email.sendKeys('test@gmail.com');
    phone.sendKeys('12223333145');
    subject.sendKeys('Angular Test');
    message.sendKeys('Test from Angular using Protractor');
    btn.click();
    expect(spinner.isPresent()).toBe(false);
    expect(success.isPresent()).toBe(false);
    browser.sleep(5000);
  });

});
