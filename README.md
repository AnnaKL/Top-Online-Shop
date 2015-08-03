[![Build Status](https://travis-ci.org/AnnaKL/Top-Online-Shop.svg?branch=master)](https://travis-ci.org/AnnaKL/Top-Online-Shop)

## Top Online Shop 

![Picture 1](www/img/screenshot1.png)  ![Picture 2](www/img/screenshot2.png) 

Online Shop application built with:
* Ionic - HTML5 Hybrid Mobile App Framework using:
- AngularJS(open source front-end MVC framework),
- Apache Cordova(platform for building native mobile applications using HTML, CSS
  and JavaScript)
* NodeJS
* CSS

Tested with:
* Karma for unit testing
* Protractor for UI testing 

##Implemented user stories:

```
 As a User I can add a product to my shopping cart.
 As a User I can remove a product from my shopping cart.
 As a User I can view the total price for the products in my shopping cart.
 As a User I can apply a voucher to my shopping cart.
 As a User I can view the total price for the products in my shopping cart with discounts applied.
 As a User I am alerted when I apply an invalid voucher to my shopping cart.
 As a User I am unable to add Out of Stock products to the shopping cart.


 The discount vouchers used:
 - £5.00 off your order,
 - £10.00 off when you spend over £50.00,
 - £15.00 off when you have bought at least one footwear item and spent over £75.00
```

##Approach:

##File structure:

All the code I've written is located in ```www``` and ```tests``` folders. 

HTML is seperated between ```www/index.html``` file and ```www/templates```.
Javascript code is splitted between ```www/js/app.js```(contaning Angular module code), ```www/js/controllers.js```(including Angular controller code) and ```www/js/services```(holding Angular factory code).

Karma unit testing code is seperated between ```tests/Controllers``` and ```tests/Services``` folders.
Protractor UI code is located in the ```tests/e2e``` folder.

NodeJS is used to serve Ionic app.
