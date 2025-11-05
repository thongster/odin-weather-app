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
        // img.src = dataTop.data.images.original.url
    } catch(error) {
        console.error(error)
    }
}