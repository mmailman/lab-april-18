//Day 6 lab-april-18

//Pike Place Object
var pikePlace = {
  minCustomer: 17,
  maxCustomer: 88,
  avgCookiesPerSale: 5.2,
  locationName: 'Pike Place Market',
  hoursOfOperation: [06,20], //stored in 24hr format.
  render: function(){
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
        newLiEl.textContent = actualHour + 'am: ' + hourlyData[0][hour];
      }else if(actualHour === 12){
        newLiEl.textContent = actualHour + 'pm: ' + hourlyData[0][hour];
      }else {
        newLiEl.textContent = (actualHour - 12) + 'pm: ' + hourlyData[0][hour];
      }
      dataList.appendChild(newLiEl);
    }

    var dailyCookieTotalLiEl = document.createElement('li');
    dailyCookieTotalLiEl.textContent = 'Total cookies sold today: ' + hourlyData[1];
    dataList.appendChild(dailyCookieTotalLiEl);

    storeEl.appendChild(dataList);
  },
  calcHourlyCust: function(){
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },
  calcHourlySales: function(){
    return Math.floor(this.calcHourlyCust() * this.avgCookiesPerSale); //Returns total cookies sold per hour.
  },
  calcDailyTotal: function(){
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
  }

};

//SeaTac Airport Object
var seaTac = {
  minCustomer: 6,
  maxCustomer: 24,
  avgCookiesPerSale: 1.2,
  locationName: 'SeaTac Airport',
  hoursOfOperation: [06,20], //stored in 24hr format.
  render: function(){
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
        newLiEl.textContent = actualHour + 'am: ' + hourlyData[0][hour];
      }else if(actualHour === 12){
        newLiEl.textContent = actualHour + 'pm: ' + hourlyData[0][hour];
      }else {
        newLiEl.textContent = (actualHour - 12) + 'pm: ' + hourlyData[0][hour];
      }
      dataList.appendChild(newLiEl);
    }

    var dailyCookieTotalLiEl = document.createElement('li');
    dailyCookieTotalLiEl.textContent = 'Total cookies sold today: ' + hourlyData[1];
    dataList.appendChild(dailyCookieTotalLiEl);

    storeEl.appendChild(dataList);
  },
  calcHourlyCust: function(){
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },
  calcHourlySales: function(){
    return Math.floor(this.calcHourlyCust() * this.avgCookiesPerSale); //Returns total cookies sold per hour.
  },
  calcDailyTotal: function(){
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
  }

};

//Southcenter Object
var southcenter = {
  minCustomer: 11,
  maxCustomer: 38,
  avgCookiesPerSale: 1.9,
  locationName: 'Southcenter',
  hoursOfOperation: [06,20], //stored in 24hr format.
  render: function(){
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
        newLiEl.textContent = actualHour + 'am: ' + hourlyData[0][hour];
      }else if(actualHour === 12){
        newLiEl.textContent = actualHour + 'pm: ' + hourlyData[0][hour];
      }else {
        newLiEl.textContent = (actualHour - 12) + 'pm: ' + hourlyData[0][hour];
      }
      dataList.appendChild(newLiEl);
    }

    var dailyCookieTotalLiEl = document.createElement('li');
    dailyCookieTotalLiEl.textContent = 'Total cookies sold today: ' + hourlyData[1];
    dataList.appendChild(dailyCookieTotalLiEl);

    storeEl.appendChild(dataList);
  },
  calcHourlyCust: function(){
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },
  calcHourlySales: function(){
    return Math.floor(this.calcHourlyCust() * this.avgCookiesPerSale); //Returns total cookies sold per hour.
  },
  calcDailyTotal: function(){
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
  }

};

//Bellevue Square Object
var bellevueSquare = {
  minCustomer: 20,
  maxCustomer: 48,
  avgCookiesPerSale: 3.3,
  locationName: 'Bellevue Square',
  hoursOfOperation: [06,20], //stored in 24hr format.
  render: function(){
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
        newLiEl.textContent = actualHour + 'am: ' + hourlyData[0][hour];
      }else if(actualHour === 12){
        newLiEl.textContent = actualHour + 'pm: ' + hourlyData[0][hour];
      }else {
        newLiEl.textContent = (actualHour - 12) + 'pm: ' + hourlyData[0][hour];
      }
      dataList.appendChild(newLiEl);
    }

    var dailyCookieTotalLiEl = document.createElement('li');
    dailyCookieTotalLiEl.textContent = 'Total cookies sold today: ' + hourlyData[1];
    dataList.appendChild(dailyCookieTotalLiEl);

    storeEl.appendChild(dataList);
  },
  calcHourlyCust: function(){
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },
  calcHourlySales: function(){
    return Math.floor(this.calcHourlyCust() * this.avgCookiesPerSale); //Returns total cookies sold per hour.
  },
  calcDailyTotal: function(){
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
  }

};

//Alki Object
var alki = {
  minCustomer: 3,
  maxCustomer: 24,
  avgCookiesPerSale: 2.6,
  locationName: 'Alki',
  hoursOfOperation: [06,20], //stored in 24hr format.
  render: function(){
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
        newLiEl.textContent = actualHour + 'am: ' + hourlyData[0][hour];
      }else if(actualHour === 12){
        newLiEl.textContent = actualHour + 'pm: ' + hourlyData[0][hour];
      }else {
        newLiEl.textContent = (actualHour - 12) + 'pm: ' + hourlyData[0][hour];
      }
      dataList.appendChild(newLiEl);
    }

    var dailyCookieTotalLiEl = document.createElement('li');
    dailyCookieTotalLiEl.textContent = 'Total cookies sold today: ' + hourlyData[1];
    dataList.appendChild(dailyCookieTotalLiEl);

    storeEl.appendChild(dataList);
  },
  calcHourlyCust: function(){
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },
  calcHourlySales: function(){
    return Math.floor(this.calcHourlyCust() * this.avgCookiesPerSale); //Returns total cookies sold per hour.
  },
  calcDailyTotal: function(){
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
  }

};

// Code calls
var storeArray = [pikePlace, seaTac, southcenter, bellevueSquare, alki];

for(var store = 0; store < storeArray.length; store++){
  storeArray[store].render();
}
