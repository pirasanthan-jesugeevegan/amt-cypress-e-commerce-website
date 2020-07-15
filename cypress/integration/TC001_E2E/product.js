//const productPage = require('../../pageObject/productPage')

Given('the user selects a {string} tshirt', (content) => {

    cy
        .get('a[title="Women"]')
        .click()
        .get('.block_content > .tree > :nth-child(1) > .grower')
        .should('be.visible')
        .click()
        .get('.block_content > .tree > :nth-child(1) > ul > :nth-child(1) > a')
        .click()
        .get('.ajax_block_product')
        .should('contain.text', content)
        .get('.available-now')
        .should('contain.text', 'In stock')
        .get('a[title="View"]')
        .click()

});
When('the user selects quantity {string}', (content) => {
    cy
        .get('#quantity_wanted')
        .clear()
        .type(content)
        .should('contain.value', content)
});
When('the user selects size {string}', (content) => {
    cy
        .get('select')
        .select(content)
        .should('contain.text', content)
})
When('the user selects color {string}', (content) => {

    if (content === 'blue') {
        cy
            .get('#color_14')
            .click()
            .should('have.class', 'selected')
    } else {
        cy
            .get('#color_13')
            .click()
            .should('have.class', 'selected')
    }

});
When('the user add to cart', () => {
    cy
        .get('#add_to_cart')
        .click()
        .get('h2')
        .should('contain.text', 'Product successfully added to your shopping cart')
        .get('a[title="Proceed to checkout"]')
        .click()

});
Then('the user should see selected item {string}', (content) => {
    cy
        .get('.cart_description')
        .should('contain.text', content)

});

