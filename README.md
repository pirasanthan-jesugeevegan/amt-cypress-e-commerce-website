
<h1 align="center">Buy Product E-commerce </h1>
 <p align="center">
 <img height="50px" src="https://miro.medium.com/max/7200/1*Jkb_tsMBOvL6wQ8bzldu8Q.png" />
  <img height="50px" src="https://cdn.iconscout.com/icon/free/png-256/mocha-1-1175012.png" /> 
  <img height="50px" src="https://brandslogos.com/wp-content/uploads/thumbs/cucumber-logo-vector.svg" />
 </p>

This is a task to Automate [http://automationpractice.com/index.php](http://automationpractice.com/index.php) website using Cypress and Cucumber with Mochawesome report, Please see below for the Test Case that are automated 


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
Note - These are one of the few to be automated

## Install

1.  Clone the repo
2.  `npm install` or 	`yarn install`


## Run tests
**CLI** - Run CLI

 
```
npx cypress run
```
**Cypress UI** - Run on Cypress UI
 
```
yarn || npm test:chrome
```

## DEMO
[Live report - Schedule to run everyday ](https://pirasanthan-jesugeevegan.github.io/amt-cypress-e-commerce-website/)

## Technology used:

 - Cypress 
 - Cucumber
 - Mochawsome
