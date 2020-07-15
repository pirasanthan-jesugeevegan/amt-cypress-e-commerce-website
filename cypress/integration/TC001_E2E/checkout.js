
Given('the user sets delivery details', (datatable) => {
    datatable.hashes().forEach(element => {

        if (element.postCode = 'n97qa') {
            cy
                .get('button[name="processAddress"]')
                .click()
        } else {
            cy
                .get('#address_delivery > .address_update > .button > span')
                .click()
                .get('#address1')
                .clear()
                .type(element.postCode)
                .get('#submitAddress')
                .click()
                .get('.cart_navigation > .button > span')
                .click()
        }
    })
})

When('the user make a payment', () => {
    cy
        .get('[type="checkbox"]')
        .should('not.be.checked')
        .check()
        .should('be.checked')
        .get('button[name="processCarrier"]')
        .click()
        .get('.bankwire')
        .click()
        .get('.price')
        .get('#cart_navigation > .button > span')
        .click()
});

Then('the user should complete order', () => {

    //Get Text
    const ConfirmationText = cy.get('.page-heading');

    // Verify that Product is ordered
    if (ConfirmationText.contains("Order confirmation")) {
        cy.log("Order Completed: Test Case Passed");
    }
    else {
        cy.log("Order Not Successfull: Test Case Failed");
    }
    cy.clearCookies()

});