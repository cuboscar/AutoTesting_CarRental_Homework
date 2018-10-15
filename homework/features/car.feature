# Feature: Car Selection

#     As a client, I should be able to search for a car
#     Scenario: A client must be able to look for a car by city
#         Given a client is in the car rental page
#         When a valid pick up location, such as "Nile Egypt" is selected
#         And a valid drop off location, such as "Nile Egypt" is selected
#         And a valid pick up date is set
#         And a valid pick up time is set
#         And a valid drop off date is set
#         And a valid drop off time is set
#         And a search for a car is called upon
#         Then either a car list or a page for no results should be found

# When the right credentials are submitted
# Then the login attempt succeeded
# Then the landing page should be maximized
# Then the page should scroll up to hotel
Feature: Car Selection 2

    As a client, I should be able to search for a car
    @watch @focus
    Scenario: A client must be able to look for a car by using the side filters
        Given a client is in the car rental page
        When the desired fields' selection parameters are selected
        Then a search is started
#this must include both sliders

