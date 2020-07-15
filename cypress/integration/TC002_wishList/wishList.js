//const productPage = require('../../pageObject/productPage')

Given('the user navigate to home page', () => {
    cy
        .visit('baseUrl')
});

When('the user selects {string} t shirt', (content) => {
    cy
        .get('a[title="Women"]')
        .click()
        .get('.product-name')
        .contains(content)
        .click()
})

When('the user add to wishlist', () => {
    cy
        .get('h1')
        .should('contain.text', 'Faded Short Sleeve T-shirts')
        .get('#wishlist_button')
        .click()
});

Then('the user should get error message', () => {
    cy
        .get('.fancybox-error')
        .should('contain.text', 'You must be logged in to manage your wishlist.')
        .get('.fancybox-item')
        .click()
});