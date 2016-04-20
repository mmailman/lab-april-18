//Day 6, 7 lab-april-18

var storeArray = [];
//Object constructor
function Store(locationName, minCustomer, maxCustomer, avgCookiesPerSale, hoursOfOperation){
  this.locationName = locationName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.hoursOfOperation = hoursOfOperation; //stored in 24hr format, in an array where the starting time is index 0 and the close time is index 1.
  this.id = this.locationName.replace(/\s/g, '-').toLowerCase();

  this.render = function(){
    //function to display to the DOM
    var hourlyData = this.calcDailyTotal();
    var storeEl = document.getElementById('stores');

    var storeArticleEl = document.createElement('article');
    storeArticleEl.id = this.id;

    //Store Location Header
    var locationH2El = document.createElement('h2');
    locationH2El.textContent = this.locationName;
    storeArticleEl.appendChild(locationH2El);

    //Store Table
    var tableEl = document.createElement('table');
    var tableBodyEl = document.createElement('tbody');

    //Table head
    var tableHeaderEl = document.createElement('thead');
    var hourHeaderRow = document.createElement('tr');
    var timeLabel = document.createElement('th');
    timeLabel.textContent = 'Time:';
    hourHeaderRow.appendChild(timeLabel);
    for (var i = 0; i < hourlyData[0].length; i ++) {
      var hourHeader = this.hoursOfOperation[0] + i;
      var newThHour = document.createElement('th');
      if(hourHeader < 12){
        newThHour.textContent = hourHeader + 'am';
      }else if(hourHeader === 12){
        newThHour.textContent = hourHeader + 'pm';
      }else {
        newThHour.textContent = (hourHeader - 12) + 'pm';
      }
      hourHeaderRow.appendChild(newThHour);
    }

    var totalTh = document.createElement('th');
    totalTh.textContent = 'Total';
    hourHeaderRow.appendChild(totalTh);
    tableHeaderEl.appendChild(hourHeaderRow);
    tableEl.appendChild(tableHeaderEl);

    //Table body
    var dataList = document.createElement('tr');
    var cookieLabel = document.createElement('th');
    cookieLabel.textContent = 'Cookies:';
    dataList.appendChild(cookieLabel);

    for (var hour = 0; hour < hourlyData[0].length; hour ++){
      var newTdEl = document.createElement('td');
      newTdEl.textContent = hourlyData[0][hour];
      dataList.appendChild(newTdEl);
    }

    var dailyCookieTotalTdEl = document.createElement('td');
    dailyCookieTotalTdEl.textContent = hourlyData[1];
    dataList.appendChild(dailyCookieTotalTdEl);

    tableBodyEl.appendChild(dataList);
    tableEl.appendChild(tableBodyEl);
    storeArticleEl.appendChild(tableEl);
    storeEl.appendChild(storeArticleEl);
  };
  this.calcHourlyCust = function(){
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  };
  this.calcHourlySales = function(){
    return Math.floor(this.calcHourlyCust() * this.avgCookiesPerSale); //Returns total cookies sold per hour.
  };
  this.calcDailyTotal = function(){
    var numHoursOpen = this.hoursOfOperation[1] - this.hoursOfOperation[0];
    var salesArray = [];
    var totalSales = 0;
    for(var hour = 0; hour <= numHoursOpen; hour++){
      var hourSales = this.calcHourlySales();
      totalSales += hourSales;
      salesArray.push(hourSales);
    }
    console.log('Sales Array: ' + salesArray);
    console.log('Total Cookies Sold: ' + totalSales);
    return [salesArray, totalSales];
  };
  storeArray.push(this);
}

function handleNewStore (event) {
  event.preventDefault();

  var locationValue = event.target.location.value;
  var minValue = parseInt(event.target.min.value);
  var maxValue = parseInt(event.target.max.value);
  var avgValue = parseFloat(event.target.avg.value);
  var openingValue = parseInt(event.target.opening.value);
  var closingValue = parseInt(event.target.closing.value);
  var operatingHoursArray = [openingValue, closingValue];

  //Null check valdiation moved to the input tags in the html.
  if(closingValue < openingValue) {
    alert('Opening time must be less than closing time.');
  } else if(minValue > maxValue) {
    alert('Maximum customers must be greater than minimum customers.');
  } else {
    var newStore = new Store(locationValue, minValue, maxValue, avgValue, operatingHoursArray);
    newStore.render();
    event.target.location.value = null;
    event.target.min.value = null;
    event.target.max.value = null;
    event.target.avg.value = null;
    event.target.opening.value = null;
    event.target.closing.value = null;

  }
}

// Code calls
var pikePlace = new Store('Pike Place Market', 17, 88, 5.2, [6, 20]);
var seaTac = new Store('SeaTac Airport', 6, 24, 1.2, [6, 20]);
var southcenter = new Store('Southcenter', 11, 38, 1.9, [6, 20]);
var bellevueSquare = new Store('Bellevue Square', 20, 48, 3.3, [6, 20]);
var alki = new Store('Alki', 3, 24, 2.6, [6, 20]);

for(var store = 0; store < storeArray.length; store++){
  storeArray[store].render();
}

var storeForm = document.getElementById('store-form');
storeForm.addEventListener('submit', handleNewStore);
