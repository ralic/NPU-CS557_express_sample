/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
console.log("[Loading sample.js]")
var k;
var newXreq = function () {
    if (window.XMLHttpRequest) {
        xreq = new XMLHttpRequest();
    } else {
        // code for older browsers
        xreq = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xreq
}

var updateItem = function (self) {
//    self.parentNode\
    console.log(self)
    console.log(self.parentNode)
    console.log(self.parentNode.parentNode)
    console.log(self.parentNode.parentNode.id)
    var rowID = self.parentNode.parentNode.id;
    var rowEle = document.getElementById(rowID);
    var rowName = rowEle.childNodes[1].childNodes[0].value
    var rowQty = rowEle.childNodes[2].childNodes[0].value
    var xmlhttp = newXreq()
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.reponseText)
        }
    };
    var xhttpURL = "./update?" +
            "itemName=" + rowName + "&" +
            "itemQty=" + rowQty + "&" +
            "itemID=" + rowID;
    console.log(xhttpURL)
    xmlhttp.open("POST", xhttpURL, true);
    xmlhttp.send();
}

var removeItem = function (self) {
    var rowID = self.parentNode.parentNode.id;
    var xmlhttp = newXreq()
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.reponseText)
        }
    };
    var xhttpURL = "./remove?" +
            "itemID=" + rowID;
    console.log(xhttpURL)
    xmlhttp.open("POST", xhttpURL, true);
    xmlhttp.send();
    var toRemove = self.parentNode.parentNode
    toRemove.parentNode.removeChild(toRemove)
}