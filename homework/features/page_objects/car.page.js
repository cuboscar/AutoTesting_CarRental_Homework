import { Page } from './page';

class CarPage extends Page {
    constructor(city, starTag) {
        super().city = "hola";
        super().starTag = "x";
        // Due to randomized-nature of this testing, and the fact that cars seemed extremely random 
        // when appearing through the four filters, for feature two
        // (excercise 2) this testing excercise was focused on 
        //being able to select the filters and modify them.
        //Nonetheless, before automized testing ocurs any further, 
        //manual testing is suggested for feature 2
        //super().priceTag = '.tooltip-inner'
        super().airportPickUpTag = '.selectx>option'
    }
    //chosen through css selector as the mere ID would not have cut it due to click having to be performed in an specific area
    get pickUpLocation() { return browser.element('#s2id_carlocations > a > span.select2-chosen'); }
    get pickUpLocation_input() { return browser.element('#select2-drop > div > input'); }
    //chosen through css selector as the mere ID would not have cut it due to click having to be performed in an specific area
    get dropOffLocation() { return browser.element('#s2id_carlocations2 > a > span.select2-chosen'); }
    get dropOffLocation_input() { return browser.element('#select2-drop > div > input'); }
    get pickUpDate() { return browser.element('#departcar'); }
    //hardcoded pick up date for test simplicity; this could be done from the gherkin
    get pickupDate_31_10_2018() { return browser.element('body > div:nth-child(13) > div.datepicker-days > table > tbody > tr:nth-child(5) > td:nth-child(4)'); }
    get dropOffDate() { return browser.element('#returncar'); }
    //hardcoded drop off date for test simplicity
    get dropOffDate_09_11_2018() { return browser.element('body > div:nth-child(14) > div.datepicker-days > table > tbody > tr:nth-child(6) > td:nth-child(6)') }
    get pickUpTime_Tab() { return browser.element('//*[@id="body-section"]/div[2]/div/form/div[4]/div/select') }
    get pickUpTime() { return browser.element('select[name="pickupTime"] option'); }
    //wait 
    get dropOffTime_Tab() { return browser.element('#body-section > div.search_head > div > form > div:nth-child(6) > div > select'); }
    get dropOffTime() { return browser.element('select[name="dropoffTime"] option'); }
    get searchButton() { return browser.element('.search-button'); }
    //not sure if this should be on a different page:
    get searchResults() { return browser.element('.itemscontainer'); }
    get resultsTable() { return browser.element("a[class~='ellipsisFIX']") }
    get starGrade() { return browser.element('.rating>div.go-right') }
    get carType() { return browser.element('.hpadding20>div.go-right>div.iradio_square-grey') }
    get secondSearchTag() { return browser.element('#searchform') }
    open() {
        super.open('cars');
    }

    click(element) {
        element.click()
    }
    type_submit(selector, string) {
        browser.setValue(selector.selector, string + "\uE007");
    }
    setPickUpTime() {
        //console.log((this.pickUpTime))
        let arr = browser.getText(this.pickUpTime.selector)
        arr.splice(0, 1);
        //console.log(arr);
        let randomElement = arr[Math.floor(Math.random() * arr.length)].replace(/ /g, '');
        console.log(randomElement);
        browser.selectByVisibleText(this.pickUpTime_Tab.selector, randomElement);

    }
    setDropOffTime() {
        //console.log((this.pickUpTime))
        let arr = browser.getText(this.dropOffTime.selector)
        arr.splice(0, 1);
        //console.log(arr);
        let randomElement = arr[Math.floor(Math.random() * arr.length)].replace(/ /g, '');
        console.log(randomElement);
        browser.selectByVisibleText(this.dropOffTime_Tab.selector, randomElement);

    }
    obtainResults() {
        if (browser.elementIdText(this.searchResults.value.ELEMENT).value === "No Results Found") {
            console.log("No car results were found, but the page deploys the 'No Results' Message");
            return "OK"
        } else if (browser.elementIdText(this.searchResults.value.ELEMENT).value != "No Results Found") {
            console.log(browser.getText(this.resultsTable.selector))
            let cities = [];
            let text = browser.getText(this.resultsTable.selector);
            if (typeof text === 'string') {
                cities.push(text);
            } else {
                cities = text;
            }

            cities.forEach((element, i) => {
                if (element !== this.city) {
                    console.log("Element " + element + ", number " + i + " is not ok.")
                    throw "CARS ARE FROM UNCHOSEN CITIES";
                } else {
                    console.log("Element " + element + ", number " + i + " is ok.")
                }
            });
        }
    }
    dragAndDropPrize() {
        // browser.touchAction('#collapse2 > div > div > div.slider-track > div:nth-child(2)', [
        //     'press',
        //     { action: 'moveTo', x: 10, y: 0 },
        //     'release'
        // ])
        this.maximizar(true)

        browser.moveToObject('#collapse2 > div > div > div.slider-track > div:nth-child(2)');
        browser.buttonDown();
        //movement could be randomized
        browser.moveTo(null, 30, 0);
        browser.buttonUp();

    }
    selectStarGrade() {
        console.log(this.starGrade.selector)
        let arr = browser.elements(this.starGrade.selector)
        console.log(Math.floor(Math.random() * arr.value.length))
        arr.value[Math.floor(Math.random() * arr.value.length)].click()
    }
    selectCarType() {
        console.log(this.carType.selector)
        let arr = browser.elements(this.carType.selector)
        console.log(Math.floor(Math.random() * arr.value.length))
        arr.value[Math.floor(Math.random() * arr.value.length)].click()
    }
    selectAirportPick() {
        let b = browser.getText(this.airportPickUpTag)
        console.log(b)
        b.splice(0, 1);
        browser.selectByVisibleText('.selectx', b[Math.floor(Math.random() * b.length)])
    }

}



export default new CarPage();