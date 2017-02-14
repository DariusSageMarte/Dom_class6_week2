'use strict';

var storeHours = [6,7,8,9,10,11,12,1,2,3,4,5,6,7,8];
var pike = {
  minCust:23,
  maxCust:65,
  cookiePerCust:6.3,
  zeroDay: [],
  randomNum: function ()  {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  },
  cookiesPerHour: function () {
    return (this.cookiePerCust * this.randomNum());
  },
  customerCookies: function(){
    for(var i = 0; i < storeHours.length; i++ ) {
  this.zeroDay.push(this.cookiesPerHour());  
  }
  }
};
console.log(pike.customerCookies());
console.log(pike.zeroDay);

// var storeList = document.getElementById('pike');
// var NameOfStore = document.getElementById('pikeHeader');

var storeHours = [6,7,8,9,10,11,12,1,2,3,4,5,6,7,8];
var seaTacAir = {
  minCust:3,
  maxCust:24,
  cookiePerCust:1.2,
  pat:[],
  randomNum: function ()  {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  },
  cookiesPerHour: function () {
    return (this.cookiePerCust * this.randomNum());
  },
  customerCookies: function(){
    for(var i = 0; i < storeHours.length; i++ ) {
  this.pat.push(this.cookiesPerHour());  
  }
  }
};

