//SETTING TODAY'S DATE
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', time: 'numeric'};
let today  = new Date();
$('#date').append(today.toLocaleDateString("en-US", options).toUpperCase())

// OPEN WEATHER MAP
let cityName
let countryName
let currentDate
let wind
let description
let icon
let currentTemp
let tempHigh
let tempLow
let humidity
let pressure

function fahrenheit(input) {
    let output = (9 / 5) * input - 459.67
    return output.toFixed(1)
}
$.ajax("http://api.openweathermap.org/data/2.5/forecast", {
    type: 'GET',
    data: {
        APPID: openweatherKey,
        q: "Pana, US"
    }
}).done(function(data) {
    console.log(data);
    for(let i = 0; i < data.list.length; i++) {
        if (data.list[i].dt_txt.split(' ')[1] === '15:00:00') {
            cityName = data.city.name
            countryName = data.city.country
            currentDate = data.list[i].dt_txt
            wind = data.list[i].wind.speed
            description = data.list[i].weather[0].description
            icon = data.list[i].weather[0].icon
            currentTemp = data.list[i].main.temp
            tempHigh = data.list[i].main.temp_max
            tempLow = data.list[i].main.temp_min
            humidity = data.list[i].main.humidity
            pressure = data.list[i].main.pressure

            console.log(icon);
            let html = '';
            html += '<div class="col-6 col-md card-header">'
            html += '<p class="card-text" id="cityName">' +  cityName + ', ' + countryName + '</p>'
            html += '<h5 class="card-title" id="current">' + 'Date: '  + '<br>' + currentDate.split(' ')[0] + '</h5>'
            html += '<p class="card-text" id="temp">' + 'High: ' + fahrenheit(tempHigh) + '˚F' + '<br>' + 'Low: ' + fahrenheit(tempLow) + '˚F' + '</p>'
            html += '<img src="http://openweathermap.org/img/w/' + icon + '.png">'
            html += '<p class="card-text" id="description">' + description+ '</p>'
            html += '<p class="card-text" id="humidity">' + 'Humidity: ' + humidity + '</p>'
            html += '<p class="card-text" id="windspeed">' + 'Wind Speed: ' + wind + '</p>'
            html += '<p class="card-text" id="pressure">' + 'Pressure: ' + pressure + '</p>'
            html += '</div>'


            $('#weather').append(html)
        }
    }
});

//GETTING THE OPEN WEATHER MAP DATA

mapboxgl.accessToken = token;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/examples/cke97f49z5rlg19l310b7uu7j', // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    center: [-89.0801, 39.3889 ], // starting position
    zoom: 4// starting zoom
});
const geocoder = new MapboxGeocoder({
    // Initialize the geocoder
    accessToken: mapboxgl.accessToken, // Set the access token
    mapboxgl: mapboxgl, // Set the mapbox-gl instance
    marker: true // Do not use the default marker style
});
geocoder.on('result', function(e) {

    let word = e.result.place_name
    findLoc(e.result.center, word)
})

map.addControl(geocoder);

//    start of click marker

marker = new mapboxgl.Marker();
map.on('click', addMarker)

function findLoc(coordinates){
    $.ajax("http://api.openweathermap.org/data/2.5/forecast", {
        type: 'GET',
        data: {
            APPID: openweatherKey,
            lat:    coordinates[1],
            lon:   coordinates[0],
        }
    }).done(function(data) {
        console.log(data);
        $('#weather').empty()
        for(let i = 0; i < data.list.length; i++) {
            if (data.list[i].dt_txt.split(' ')[1] === '15:00:00') {
                cityName = data.city.name
                countryName = data.city.country
                currentDate = data.list[i].dt_txt
                wind = data.list[i].wind.speed
                description = data.list[i].weather[0].description
                icon = data.list[i].weather[0].icon
                currentTemp = data.list[i].main.temp
                tempHigh = data.list[i].main.temp_max
                tempLow = data.list[i].main.temp_min
                humidity = data.list[i].main.humidity
                pressure = data.list[i].main.pressure

                console.log(icon);
                let html = '';
                html += '<div class="col-6 col-md card-header">'
                html += '<p class="card-text" id="cityName">' +  cityName + ', ' + countryName + '</p>'
                html += '<h5 class="card-title" id="current">' + 'Date: ' + currentDate.split(' ')[0] + '</h5>'
                html += '<p class="card-text">' + 'High: ' + fahrenheit(tempHigh) + '˚F' + '<br>' + 'Low: ' + fahrenheit(tempLow) + '˚F' + '</p>'
                html += '<img src="http://openweathermap.org/img/w/' + icon + '.png">'
                html += '<p class="card-text">' + description+ '</p>'
                html += '<p class="card-text">' + 'Humidity: ' + humidity + '</p>'
                html += '<p class="card-text">' + 'Wind Speed: ' + wind + '</p>'
                html += '<p class="card-text">' + 'Pressure: ' + pressure + '</p>'
                html += '</div>'
                $('#weather').append(html)
            }
        }
    })
}