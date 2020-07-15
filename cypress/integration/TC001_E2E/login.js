const loginPage = require('../../pageObject/loginPage.json')

Given('the user open login page', () => {
    cy
        .visit('?controller=authentication&back=my-account')
});

When('the user type in', (datatable) => {
    datatable.hashes().forEach(element => {
        cy
            .get(loginPage.username)
            .type(element.username)
            .get(loginPage.password)
            .type(element.password)
    })
})

When('the user clicks on Sign in button', () => {
    cy
        .get(loginPage.logInButton)
        .contains('Sign in')
        .should('be.visible')
        .click()
});

Then('{string} should be shown', (content) => {
    cy
        .contains(content, { timeout: 10000 })
        .should('be.visible')
});