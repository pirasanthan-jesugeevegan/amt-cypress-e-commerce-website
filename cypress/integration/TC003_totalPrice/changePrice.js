
Then('the user should see selected item {string}', (content) => {
    cy.get('.cart_description').should('contain.text', content)

});

When('the user change quanity {string}', (content) => {

    cy
        // .get('.cart_quantity_input')
        // .then(elem => {
        //     const actualPrice = Cypress.$(elem).val();
        //     cy.writeFile('cypress/fixtures/quantityOld.json', { quantityOld: actualPrice })
        // })
        .get('.cart_quantity_input')
        .should('be.visible')
        .clear()
        //.get('.cart_quantity_input')
        .type(content)
    //     .writeFile('cypress/fixtures/quantityNew.json', { quantityNew: content })
    // cy.get('#product_price_1_4_346905 > .price')
    //     .then(elem => {
    //         const price = Cypress.$(elem).val();
    //         console.log(price   )
    //         cy.writeFile('cypress/fixtures/productPrice.json', { productPrice: price })
    //     })

});
Then('the price should match', () => {

    cy.get('.cart_quantity_input').invoke('val').then(quanity => {
        const productPrice = 16.51
        const totalPrice = quanity * productPrice
        cy.get('#total_product').should('contain.text', totalPrice)

    })
    cy.clearCookies()
})