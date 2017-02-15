'use strict'
var storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
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
pike.customerCookies();
console.log(pike.zeroDay);

var storeList = document.getElementById('pike');
var NameOfStore = document.getElementById('pikeHeader');
NameOfStore.textContent = 'Salmon Shop';

var seaTacAir = {
  minCust:3,
  maxCust:24,
  custPerCookie:1.2,
  pat:[],
  randomNum: function ()  {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  },
  cookiesPerHour: function () {
    return (this.custPerCookie * this.randomNum());
  },
  customerCookies: function(){
    for(var i = 0; i < storeHours.length; i++ ) {
      this.pat.push(this.cookiesPerHour());
    }
  }
};
seaTacAir.customerCookies();
console.log('sea ' + seaTacAir.pat);



var seattleCenter = {
  minCust:11,
  maxCust:38,
  cookiePerCust:3.7,
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
seattleCenter.customerCookies();
console.log(seattleCenter.zeroDay);

var capHill = {
  minCust:20,
  maxCust:38,
  cookiePerCust:2.3,
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
capHill.customerCookies();
console.log('capHill ' + capHill.zeroDay);

var alki = {
  minCust:2,
  maxCust:16,
  cookiePerCust:4.6,
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
alki.customerCookies();
console.log('alki ' + alki.zeroDay);