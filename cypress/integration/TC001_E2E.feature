Feature: Automate End to End Buy Order functionality.

    I want to log into my account
    I want to select product
    I want to add to cart
    I want to make payment
    I want to complete payment

    @e2e
    Scenario: Login
        Given I open login page
        When I type in
            | username            | password |
            | test111@test111.com | test111  |
        And I click on Sign in button
        Then "John Smith" should be shown
