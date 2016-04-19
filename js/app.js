//Day 6, 7 lab-april-18

var storeArray = [];
//Object constructor
function Store(locationName, minCustomer, maxCustomer, avgCookiesPerSale, hoursOfOperation){
  this.locationName = locationName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.hoursOfOperation = hoursOfOperation; //stored in 24hr format, in an array where the starting time is index 0 and the close time is index 1.

  this.render = function(){
    //function to display to the DOM
    var storeEl = document.getElementById('stores');
    var tableEl = document.createElement('table');
    var tableHeaderEl = document.createElement('thead');
    var tableBodyEl = document.createElement('tbody');
    var trHeaderEl = document.createElement('tr');
    var locationH2El = document.createElement('h2');
    locationH2El.textContent = this.locationName;
    storeEl.appendChild(locationH2El);
    tableHeaderEl.appendChild(trHeaderEl);
    tableEl.appendChild(tableHeaderEl);

    var hourlyData = this.calcDailyTotal();
    var hourHeaderRow = document.createElement('tr');
    var timeLabel = document.createElement('td');
    timeLabel.textContent = 'Time:';
    hourHeaderRow.appendChild(timeLabel);
    for (var i = 0; i < hourlyData[0].length; i ++) {
      var hourHeader = this.hoursOfOperation[0] + i;
      var newTdHour = document.createElement('td');
      if(hourHeader < 12){
        newTdHour.textContent = hourHeader + 'am';
      }else if(hourHeader === 12){
        newTdHour.textContent = hourHeader + 'pm';
      }else {
        newTdHour.textContent = (hourHeader - 12) + 'pm';
      }
      hourHeaderRow.appendChild(newTdHour);
    }

    var totalTd = document.createElement('td');
    totalTd.textContent = 'Total';
    hourHeaderRow.appendChild(totalTd);
    tableBodyEl.appendChild(hourHeaderRow);

    var dataList = document.createElement('tr');
    var cookieLabel = document.createElement('td');
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
    storeEl.appendChild(tableEl);
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

// Code calls
var pikePlace = new Store('Pike Place Market', 17, 88, 5.2, [6, 20]);
var seaTac = new Store('SeaTac Airport', 6, 24, 1.2, [6, 20]);
var southcenter = new Store('Southcenter', 11, 38, 1.9, [6, 20]);
var bellevueSquare = new Store('Bellevue Square', 20, 48, 3.3, [6, 20]);
var alki = new Store('Alki', 3, 24, 2.6, [6, 20]);

for(var store = 0; store < storeArray.length; store++){
  storeArray[store].render();
}
