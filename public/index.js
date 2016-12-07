var app = function(){
  var url = 'https://restcountries.eu/rest/v1/all'
  makeRequest(url, requestComplete);
}


var makeRequest = function(url, callback){
  //create a new XMLhttpRequest (avaliable on browser)
  var request = new XMLHttpRequest();
  // open the reqest tell it what method we want to use
  request.open("GET", url);
  // set the callback we want it to run then its complete
  request.onload = callback;
  //send the reqest
  request.send();
}

var requestComplete = function(){
  console.log("Whoot, success");
  if(this.status !=200) return;

  var jsonString = this.responseText;
  // parse turns string into objects
  var countries = JSON.parse(jsonString);
  populateList(countries);
}

var populateList = function(countries){
  var ul = document.getElementById('country-list');

    //Loop rund countries array (forEach)
  countries.forEach(function(country){
      // create and <li> for each one 
     var li = document.createElement('li');
     li.innerText = country.name;
     // append each element to the <ul>
     ul.appendChild(li);
  });

}

window.onload = app;