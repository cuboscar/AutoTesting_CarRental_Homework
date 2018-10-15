import carPage from '../page_objects/car.page';

module.exports = function () {
    this.Given(/^a client is in the car rental page$/, function () {
        // Write code here that turns the phrase above into concrete actions
        carPage.open();
    });
    this.When(/^a valid pick up location, such as "([^"]*)" is selected$/, function (arg1) {
        carPage.click(carPage.pickUpLocation);
        carPage.city = arg1;
        console.log(carPage.city)
        carPage.type_submit(carPage.pickUpLocation_input, arg1);
    });
    this.When(/^a valid drop off location, such as "([^"]*)" is selected$/, function (arg1) {
        //through manual testing it can be seen that if a pause is not left here, the return location
        //self-modifies
        browser.pause(2000)
        carPage.click(carPage.dropOffLocation);
        carPage.type_submit(carPage.dropOffLocation_input, arg1);
    });
    this.When(/^a valid pick up date is set$/, function () {
        carPage.click(carPage.pickUpDate);
        browser.pause(1000);
        carPage.click(carPage.pickupDate_31_10_2018);
    });
    this.When(/^a valid pick up time is set$/, function () {
        carPage.setPickUpTime();
    });
    this.When(/^a valid drop off date is set$/, function () {
        carPage.click(carPage.dropOffDate);
        browser.pause(1000);
        carPage.click(carPage.dropOffDate_09_11_2018);
    });
    this.When(/^a valid drop off time is set$/, function () {
        carPage.setDropOffTime();
    });
    this.When(/^a search for a car is called upon$/, function () {
        // Write code here that turns the phrase above into concrete actions
        carPage.click(carPage.searchButton);
    });
    this.Then(/^either a car list or a page for no results should be found$/, function () {
        carPage.obtainResults();
    });

    /**
     * 
     * For the second feature
     * 
     */
    //May functions be added "un"sequentially? what is the correct structure?
    this.When(/^the desired fields' selection parameters are selected$/, function () {

        carPage.dragAndDropPrize();
        carPage.selectStarGrade();
        carPage.selectCarType();
        carPage.selectAirportPick();
    });
    this.Then(/^a search is started$/, function () {
        // Write code here that turns the phrase above into concrete actions
        carPage.click(carPage.secondSearchTag)
    });


}
/**
 * 
 * The following was left as a guideline
 * 
 */
// this.Given(/^a client is on the login page$/, function () {
    //     loginPage.open();
    //     loginPage.maximizar(false);
    //     loginPage.email.waitForVisible();
    // });

    // this.When(/^the right credentials are submitted$/, function () {
    //     loginPage.email.setValue('user@phptravels.com');
    //     loginPage.password.setValue('demouser');
    //     loginPage.submit();
    // });

    // this.Then(/^the login attempt succeeded$/, function () {
    //     landingPage.tabBar.waitForExist();
    //     expect(landingPage.tabBar.isVisible()).not.toContain(false);
    // });
    // this.Then(/^the landing page should be maximized$/, function () {
    //     // Write code here that turns the phrase above into concrete actions
    //     landingPage.maximizar(true);
    // });
    // this.Then(/^the page should scroll up to hotel$/, function (arg1) {
    //     // Write code here that turns the phrase above into concrete actions

    // });