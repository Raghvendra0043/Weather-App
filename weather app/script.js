//  http://api.weatherapi.com/v1/current.json?key=5786878eecec40d5b02140150231809 &q=London&aqi=no



const nameField = document.querySelector('.name');
const regionField = document.querySelector('.region');
const countryField = document.querySelector('.country');
const continentField = document.querySelector('.continent');
const tempCField = document.querySelector('.tempC');
const tempFField = document.querySelector('.tempF');
const textField = document.querySelector('.text');
const timeField = document.querySelector('.time');
const searchField = document.querySelector(".search_bar");
const form = document.querySelector('form');



form.addEventListener('submit', searchForLocation)


let target = 'Lucknow'
const fetchResult = async (targetLocation) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=5786878eecec40d5b02140150231809 &q=${targetLocation}&aqi=no`

    const res = await fetch(url)
    const data = await res.json()

    console.log(data)

    let locationName = data.location.name
    let time = data.location.localtime
    let tempC = data.current.temp_c
    let tempF = data.current.temp_f
    let country = data.location.country
    let region = data.location.region
    let continent = data.location.tz_id
    let condition = data.current.condition.text

    updateDetails(locationName, time, tempC, tempF, country, region, continent, condition)
}


function updateDetails(locationName, time, tempC, tempF, country, region, continent, condition) {

    let splitDate = time.split(' ')[0]
    let splitTime = time.split(' ')[1]

    let currentDay = getDayName(new Date(splitDate).getDay())

    nameField.innerText = locationName
    regionField.innerText = region
    countryField.innerText = country
    continentField.innerText = continent
    tempCField.innerText = tempC
    tempFField.innerText = tempF
    textField.innerText = condition
    timeField.innerText = `${splitDate} ${currentDay} ${splitTime}`


}

function searchForLocation(e){
    e.preventDefault()

    target=searchField.value
    fetchResult(target)
}
fetchResult(target)


function getDayName(number) {
    switch (number) {
        case 0:
            return 'Sunday'
        case 1:
            return 'Monday'
        case 2:
            return 'Tuesday'
        case 3:
            return 'Wednesday'
        case 4:
            return 'Thursday'
        case 5:
            return 'Friday'
        case 6:
            return 'Saturday'
    }
}