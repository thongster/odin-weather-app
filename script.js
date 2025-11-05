// visual crossing key 5XF6Z9YQS855HGSV5HXPV5VAV

const form = document.getElementById("searchForm")
const search = document.getElementById("searchWeather")
const button = document.getElementById("getWeatherButton")

const resolvedAddress = document.getElementById("resolvedAddress")
const condition = document.getElementById("condition")

const date = document.getElementById("date")
const time = document.getElementById("time")

const icon = document.getElementById("icon")
const temp = document.getElementById("temp")
const description = document.getElementById("description")

const humidity = document.getElementById("humidity")
const wind = document.getElementById("wind")
const feelslike = document.getElementById("feelslike")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    fetchData()
})

async function fetchData() {
    try {
        const location = search.value
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=5XF6Z9YQS855HGSV5HXPV5VAV`)
        if (!response.ok) {
            throw new Error("you are gae")
        }
        const data = await response.json()
        console.log(data)

        resolvedAddress.textContent = data.resolvedAddress
        condition.textContent = data.currentConditions.conditions

        time.textContent = data.currentConditions.datetime

        // figure out icon import
        console.log(data.currentConditions.icon)
        temp.textContent = `${data.currentConditions.temp}°F`
        description.textContent = data.description

        humidity.textContent = `${data.currentConditions.humidity}%`
        wind.textContent = `${data.currentConditions.windspeed}km/h`
        feelslike.textContent = `${data.currentConditions.feelslike}°F`
        console.log(data.currentConditions.humidity)
        console.log(data.currentConditions.feelslike)
        console.log(data.currentConditions.windspeed)

        const tempF = data.currentConditions.temp
        const feelslikeF = data.currentConditions.feelslike
        const tempC = Math.round(5 / 9 * (tempF - 32) * 10) / 10
        const feelslikeC = Math.round(5 / 9 * (feelslikeF - 32) * 10) / 10

        console.log(`Temp in Celcius: ${tempC}`)
        console.log (`Feels Like in Celcius: ${feelslikeC}`)
        // img.src = dataTop.data.images.original.url
    } catch(error) {
        console.error(error)
    }
}