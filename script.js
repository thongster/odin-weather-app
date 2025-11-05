// visual crossing key 5XF6Z9YQS855HGSV5HXPV5VAV

const form = document.getElementById("searchForm")
const search = document.getElementById("searchWeather")
const button = document.getElementById("getWeatherButton")

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
        console.log(data.currentConditions.icon)
        console.log(data.currentConditions.datetime)
        console.log(data.description)
        console.log(data.currentConditions.conditions)
        console.log(data.currentConditions.temp)
        console.log(data.currentConditions.feelslike)
        console.log(data.timezone, data.tzoffset)

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