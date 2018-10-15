export class Page {

    constructor() {
        this.url = 'https://www.phptravels.net/';
    }

    open(path) {
        browser.url(this.url + path);
    }
    maximizar(siono) {
        if (siono === true) {
            browser.windowHandleMaximize('{' + browser.windowHandle().value + '}');
        }
    }
}
