'use strict';
var storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm', '3pm','4pm','5pm','6pm','7pm','8pm'];

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
  return Math.floor((this.cookiePerCust * this.randomNum()));};
Store.prototype.customerCookies = function () {
  for(var i = 0; i < storeHours.length; i++ ) {
    this.zeroDay.push(this.cookiesPerHour()); }
  console.log('zeroday' + this.zeroDay);
};
Store.prototype.renderTd = function () {

  var patsTable = document.getElementById('tom');
  var tableR = document.createElement('tr');
  patsTable.appendChild(tableR);
  for(var i = 0; i < this.zeroDay.length; i++){
    var tableD = document.createElement('td');
    tableD.textContent = this.zeroDay[i];
    tableR.appendChild(tableD);

  }
};

var pike = new Store ('1st & pike', 23, 65, 6.3);
var seaTacAir = new Store ('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store ('Seattle Center', 11, 38, 3.7);
var capHill = new Store ('Capitol Hil', 20, 38, 2.3);
var alki = new Store ('Alki', 2, 16, 4.6);

var hourTable = document.getElementById('tom');
var hourTr = document.createElement('tr');
hourTable.appendChild(hourTr);
function renderHeader() {
  for (var i = 0; i < storeHours.length; i++ ) {
    var hourTh = document.createElement('th');
    hourTh.textContent = storeHours[i];
    hourTr.appendChild(hourTh);
  }
};
renderHeader();
pike.customerCookies();
pike.renderTd();
seattleCenter.customerCookies();
seattleCenter.renderTd();
alki.customerCookies();
alki.renderTd();
capHill.customerCookies();
capHill.renderTd();
seaTacAir.renderTd();
console.log(seaTacAir.customerCookies());
var userForm = document.getElementById('patStore');
userForm.addEventListener('submit', submitHandler);


function submitHandler (event) {
  event.preventDefault();
  var data = event.target.store_name.value;
  var miniC = event.target.minCust.value;
  var MaxiC = event.target.maxCust.value;
  var CpC = event.target.cookiePerCust.value;
  var newStore = new Store (data, miniC, MaxiC, CpC);
  console.log(data);
  console.log(miniC);
  console.log(MaxiC);
  console.log(CpC);
  newStore.customerCookies();
  newStore.renderTd();
}