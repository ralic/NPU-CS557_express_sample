/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Item(itemName, itemQty) {
    this.itemName = itemName;
    this.itemQty = itemQty;
    this.id = function () {
        return Math.floor(Math.random() * 1000000000);
    }();
}
;

Item.prototype.display = function () {
    console.log(this.itemName + "," + this.itemQty);
};

module.exports = Item;