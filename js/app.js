//Day 6, 7 lab-april-18

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

    var locationH2El = document.createElement('h2');
    locationH2El.textContent = this.locationName;
    storeEl.appendChild(locationH2El);

    var dataList = document.createElement('ul');
    var hourlyData = this.calcDailyTotal();

    for (var hour = 0; hour < hourlyData[0].length; hour ++){
      var actualHour = this.hoursOfOperation[0] + hour;
      var newLiEl = document.createElement('li');
      if(actualHour < 12){
        newLiEl.textContent = actualHour + 'am: ' + hourlyData[0][hour] + ' cookies';
      }else if(actualHour === 12){
        newLiEl.textContent = actualHour + 'pm: ' + hourlyData[0][hour] + ' cookies';
      }else {
        newLiEl.textContent = (actualHour - 12) + 'pm: ' + hourlyData[0][hour] + ' cookies';
      }
      dataList.appendChild(newLiEl);
    }

    var dailyCookieTotalLiEl = document.createElement('li');
    dailyCookieTotalLiEl.textContent = 'Total: ' + hourlyData[1] + ' cookies';
    dataList.appendChild(dailyCookieTotalLiEl);

    storeEl.appendChild(dataList);
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
}

// Code calls
var pikePlace = new Store('Pike Place Market', 17, 88, 5.2, [6, 20]);
var seaTac = new Store('SeaTac Airport', 6, 24, 1.2, [6, 20]);
var southcenter = new Store('Southcenter', 11, 38, 1.9, [6, 20]);
var bellevueSquare = new Store('Bellevue Square', 20, 48, 3.3, [6, 20]);
var alki = new Store('Alki', 3, 24, 2.6, [6, 20]);
var storeArray = [pikePlace, seaTac, southcenter, bellevueSquare, alki];

for(var store = 0; store < storeArray.length; store++){
  storeArray[store].render();
}
