var express = require('express');
var router = express.Router();
var Item = require('../models/Item');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render("list", {app: ""});
});


/* GET order page. */
router.get('/order', function (req, res, next) {
    res.render("order", {
        cusTitle: "Order form",
        cusContent: "Order Form Content"
    });
});


router.post('/order', function (req, res, next) {
//    console.log(req.body.itemName);
//    console.log(req.body.itemQty);

    req.session.cart.push(
            new Item(req.body.itemName, req.body.itemQty));
    console.log(req.session.cart);

    res.render("thankyou", {
        pageTitle: "Thank you",
        ItemName: req.body.itemName,
        ItemQty: req.body.itemQty
    });
});

// for update session.cart
router.post('/update', function (req, res, next) {
    console.log(req.session.cart);
    //  Assume request url is  /update?itemName=xxx&itemQTy=xxx&itemID=xxx

    var pString = req.url.split("?")[1]
    var pArray = pString.split("&");
    console.log(pArray);
    var newitemName = pArray[0].split("=")[1]
    var newitemQty = pArray[1].split("=")[1]
    var newitemID = pArray[2].split("=")[1]
    console.log(newitemName, newitemQty, newitemID)
    var tempCart = req.session.cart
    for (var i = 0; i < tempCart.length; i++) {
        if (tempCart[i].id === Number(newitemID)) {
            tempCart[i].itemName = newitemName
            tempCart[i].itemQty = newitemQty
        }
    }
    console.log(req.session.cart)
    res.render('cart', {
        title: 'Cart Page',
        cart: req.session.cart
    });
});


// for REMOVE session.cart
router.post('/remove', function (req, res, next) {
    console.log(req.session.cart);
    //  Assume request url is  /remove?itemID=xxx
    var pString = req.url.split("?")[1]
    console.log(pString)
    var newitemID = pString.split("=")[1]
    console.log(newitemID)
    var tempCart = req.session.cart
    for (var i = 0; i < tempCart.length; i++) {
        console.log(tempCart[i].id, newitemID)
        if (tempCart[i].id == Number(newitemID)) {
            tempCart.splice(i)
        }
    }

    console.log(req.session.cart)
    res.render('cart', {
        title: 'Cart Page',
        cart: req.session.cart
    });
});


//get  cart page
router.get('/cart', function (req, res, next) {
    res.render('cart', {
        title: 'Cart Page',
        cart: req.session.cart
    });
});


module.exports = router;
