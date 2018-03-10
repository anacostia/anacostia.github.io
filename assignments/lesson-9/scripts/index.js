'use strict';
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.send();

request.onload = function () {
    const townsData = JSON.parse(request.responseText)['towns'];
    townsData.forEach((el, index) => {
        document.getElementById(townsData[index].name.toLowerCase() + 'Name').innerHTML = townsData[index].name;
        document.getElementById(townsData[index].name.toLowerCase() + 'Motto').innerHTML = townsData[index].motto;
        document.getElementById(townsData[index].name.toLowerCase() + 'Foundation').innerHTML = townsData[index].yearFounded;
        document.getElementById(townsData[index].name.toLowerCase() + 'Population').innerHTML = townsData[index].currentPopulation;
        document.getElementById(townsData[index].name.toLowerCase() + 'Rainfall').innerHTML = townsData[index].averageRainfall;
    });
}

request.onerror = function (error) {
    alert(error);
}
