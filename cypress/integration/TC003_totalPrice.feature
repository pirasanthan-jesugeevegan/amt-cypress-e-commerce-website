Feature: Automate End to End Buy Order functionality.

    I want to log into my account
    I want to select product
    I want to add to cart
    I want to make payment
    I want to complete payment



    Scenario: Login
        Given the user open login page
        When the user type in
            | username            | password |
            | test111@test111.com | test111  |
        And the user clicks on Sign in button
        Then "John Smith" should be shown

    Scenario Outline: User selects a product
        Given the user selects a "<product>" tshirt
        When the user selects quantity "<quantity>"
        And the user selects size "<size>"
        And the user selects color "<color>"
        Then the user add to cart
        Examples:
            | product                     | quantity | size | color |
            | Faded Short Sleeve T-shirts | 2        | M    | blue  |

    Scenario Outline: Scenario Outline name
        Given the user should see selected item "<product>"
        When the user change quanity "3"
        Then the price should match
        Examples:
            | product                     | quantity | size | color |
            | Faded Short Sleeve T-shirts | 2        | M    | blue  |