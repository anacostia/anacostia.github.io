var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', 'https://api.wunderground.com/api/64bdd0f13a601a1d/conditions/q/tx/greenville.json', true);

weatherObject.send();

weatherObject.onload = function () {

    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;


       document.getElementById('icon').innerHTML = weatherInfo.current_observation.icon;
    
     document.getElementById('w_icon').src = weatherInfo.current_observation.icon_url;
    
    document.getElementById('temp').innerHTML = weatherInfo.current_observation.temp_f;
    
    document.getElementById('feels').innerHTML = weatherInfo.current_observation.feelslike_f;
    
    
    document.getElementById('humidity').innerHTML = weatherInfo.current_observation.relative_humidity;


}
