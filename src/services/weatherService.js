import axios from 'axios'
import { utilService } from './utilService'
import { storageService } from './storageService'


export const weatherService = {
    getLocation,
    getForecastByLocationKey,
    getLocationsList,
    saveLocation
}

const CURRENT_FORECAST = 'CurrForecast'
const CURRENT_LOCATION = 'CurrLocation'
const API_KEY = 'sh0OUQ7RvtXa9uUhfJCXLc3lNEqpVCeS'
const initialLocation = {
    localizedName: 'Tel Aviv',
    key: '215854',
    country: 'Israel'
}

const initialFilter = {
    term: ''
}


async function getLocation() {
    let currLocation = storageService.load(CURRENT_LOCATION) || null
    if (!currLocation) {
        try {
            const { coords } = await utilService.getCurrentPosition()
            const { latitude, longitude } = coords
            currLocation = await _getLocationCodeByGeoLocation(latitude, longitude)

        }
        catch (err) {
            console.log(`getLocation error`, err)
            currLocation = { ...initialLocation }

        }
        storageService.save(CURRENT_LOCATION, { ...currLocation, date: Date.now() })
    }

    return currLocation

}


async function getForecastByLocationKey(cityKey) {
    try {
        const res = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}&metric=true`)
        if ((res.data['DailyForecasts'].length)) {
            const forecasts = res.data['DailyForecasts'].map(forecast => _getFormatedForecast(forecast))
            storageService.save(CURRENT_FORECAST, { forecasts, date: Date.now() })
            return forecasts
        } else {
            return []
        }

        // storageService.save(CURRENT_FORECAST, { forecast: [...res.data['DailyForecasts']], date: Date.now() })
        // return (res.data['DailyForecasts'].length) ? res.data['DailyForecasts'] : []
    } catch (err) {
        console.log(`getForecastByLocationKey function from weatherService`, err)
    }

}


async function _getLocationCodeByGeoLocation(lat, lon) {
    try {
        const res = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${lat},${lon}`)
        return _getFormatedLocation(res.data['LocalizedName'], res.data['Key'], res.data['Country']['LocalizedName'])
    } catch (err) {
        console.log(`getLocationCodeByGeoLocation does not respond`, err)
    }
}




async function getLocationsList(userInput) {
    try {
        const res = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${userInput}`)
        if (!res.data || res.data.length === 0) return []
        const locations = res.data.map(city => {
            return _getFormatedLocation(city['LocalizedName'], city['Key'], city['Country']['LocalizedName'], true)
        }
        )
        return locations

    } catch (err) {
        console.log(`There is an error in getLocationsList function`, err)

    }
}


function _getFormatedLocation(localizedName, key, country, withId = false) {

    return (withId) ? { localizedName, key, country, id: utilService.makeId() } : { localizedName, key, country }
}

function _getFormatedForecast(forecast) {
    let dateTime = new Date(forecast['Date'])
    return {
        forecastId:utilService.makeId(),
        date: dateTime.toDateString(),
        dayForecast: {
            icon: forecast['Day']['Icon'],
            iconPhrase: forecast['Day']['IconPhrase'],
            temperature: forecast['Temperature']['Maximum']['Value']
        },
        nighForecast: {
            icon: forecast['Night']['Icon'],
            iconPhrase: forecast['Night']['IconPhrase'],
            temperature: forecast['Temperature']['Minimum']['Value']
        }

    }
}

function saveLocation(location) {
    storageService.save(CURRENT_LOCATION, { ...location, date: Date.now() })
}

