//asia continent
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    console.log(result);
    //population is less than 1 lakhs
    var res = result.filter((ele)=>ele.continents);
    console.log(res);
    var cont= res.map((val)=>val.asia);
    console.log(cont);
}
// populations
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    console.log(result);
    //population is less than 1 lakhs
    var res = result.filter((ele)=>ele.population<200000);
    console.log(res);
}
//total population
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    console.log(result);
    function arraySum(array) {
        var sum = 0;
        for (var i = 0; i < array.length; i++) {
          sum += array[i];
        }
        console.log(result);
      }
     arraySum()
      
}
// us dollar
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    console.log(result);
    //population is less than 1 lakhs
    var res = result.filter((ele)=>ele.$);
    console.log(res);
    var usd = res.map((val)=>val.name)
    console.log(usd);
}
