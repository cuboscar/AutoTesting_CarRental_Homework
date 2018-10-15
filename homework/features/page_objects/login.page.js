import { Page } from './page';

class LoginPage extends Page {

    get email()    { return browser.element('//input[@name="username"]'); }
    get password() { return browser.element('//input[@name="password"]'); }
    get checkBox() { return browser.element('#remember-me'); }
    get form()     { return browser.element('#loginfrm > button'); }

    open() {
        super.open('login');
    }

    submit() {
        this.form.click();
    }
}

export default new LoginPage();