# Cypress - Buy-Product-E-commerce
This repo is a Cypress.io with Cucumber test script with three Test Cases, to test a E-commerce website
## Test Case:
**Test Case 1 - Automate End to End Buy Order functionality.**  
**Steps to Automate:**

1. Open link [http://automationpractice.com/index.php](http://automationpractice.com/index.php)
2. Login to the website.
3. Move your cursor over Women's link.
4. Click on sub menu 'T-shirts'.
5. Mouse hover on the second product displayed.
6. 'More' button will be displayed, click on 'More' button.
7. Increase quantity to 2.
8. Select size 'L'
9. Select color.
10. Click 'Add to Cart' button.
11. Click 'Proceed to checkout' button.
12. Complete the buy order process till payment.
13. Make sure that Product is ordered.

**Test Case 2 - Verify that 'Add to Wishlist' only works after login.**  
**Steps to Automate:**

1. Open link [http://automationpractice.com/index.php](http://automationpractice.com/index.php)
2. Move your cursor over Women's link.
3. Click on sub menu 'T-shirts'.
4. Mouse hover on the second product displayed.  
5. 'Add to Wishlist' will appear on the bottom of that product, click on it.
6. Verify that error message is displayed 'You must be logged in to manage your wishlist.'

  
**Test Case 3 - Verify that Total Price is reflecting correctly if user changes quantity on 'Shopping Cart Summary' Page.**  
**Steps to Automate:**

1. Open link [http://automationpractice.com/index.php](http://automationpractice.com/index.php)
2. Login to the website.
3. Move your cursor over Women's link.
4. Click on sub menu 'T-shirts'.
5. Mouse hover on the second product displayed.
6. 'More' button will be displayed, click on 'More' button.
7. Make sure quantity is set to 1.
8. Select size 'M'
9. Select color of your choice.
10. Click 'Add to Cart' button.
11. Click 'Proceed to checkout' button.
12. Change the quantity to 2.
13. Verify that Total price is changing and reflecting correct price.
## Install
1. Clone the repo 
2. ````npm install````

##  Run tests
Run all test: 
````
npm run test
````
Run test with tags:
**Tags** - @e2e @TC001 @TC002 @TC003
````
npm run test -e TAGS='e2e'
````

