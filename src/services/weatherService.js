import axios from 'axios'


export const weatherService = {
    getLocation,
    getForecastByLocationKey,
    getLocationsList

}


const API_KEY = 'sh0OUQ7RvtXa9uUhfJCXLc3lNEqpVCeS'
const initialLocation = {
    localizedName: 'Tel Aviv',
    key: '215854',
    country: 'Israel'
}

const initialFilter = {
    term: ''
}


 function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {

            const res = await _getLocationCodeByGeoLocation(position.coords.latitude, position.coords.longitude)
            let currentLocation = _getFormatedLocation(res['LocalizedName'], res['Key'], res['Country']['LocalizedName'])
            return currentLocation

        })
    } else {
        return initialLocation
    }

}


async function getForecastByLocationKey(cityKey) {
    try {
        const res = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}&metric=true`)
        return res.data
    } catch (err) {
        console.log(`getForecastByLocationKey`)
    }

}


async function _getLocationCodeByGeoLocation(lat, lon) {
    try {
        const res = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${lat},${lon}`)
        return res.data
    } catch (err) {
        console.log(`getLocationCodeByGeoLocation does not respond`, err)
    }
}




async function getLocationsList(userInput) {
    try {
        const res = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${userInput}`)
        if (!res.data || res.data.length == 0) return null
        const locations = res.data.map(city => {
            return _getFormatedLocation(city['LocalizedName'], city['Key'], city['Country']['LocalizedName'])
        }
        )
        return locations

    } catch (err) {
        console.log(`There is an error in getLocationsList function`, err)


    }
}


function _getFormatedLocation(localizedName, key, country) {
    return { localizedName, key, country }
}



