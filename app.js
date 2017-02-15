'use strict';
var storeHours = [6,7,8,9,10,11,12,1,2,3,4,5,6,7,8];

function Store(shop, minCust, maxCust, cookiePerCust) {
  this.name = shop;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cookiePerCust = cookiePerCust;
  this.zeroDay = [];
}

Store.prototype.randomNum = function () {
  return Math.random() * (this.maxCust - this.minCust) + this.minCust;
};
Store.prototype.cookiesPerHour = function () {
  return (this.cookiePerCust * this.randomNum());};
Store.prototype.customerCookies = function () {
  for(var i = 0; i < storeHours.length; i++ ) {
     this.zeroDay.push(this.cookiesPerHour());    }
};



var pike = new Store ('1st & pike', 23, 65, 6.3);
var seaTacAir = new Store ('SeaTac Airport' , 3, 24, 1.2);
var seattleCenter = new Store ('Seattle Center', 11, 38, 3.7);
var capHill = new Store ('Capitol Hil', 20, 38, 2.3);
var alki = new Store ('Alki', 2, 16, 4.6);
