import { weatherService } from '../../services/weatherService.js'


export function loadForeacsts(key = '215854') {
    return async dispatch => {
        try {
            const forecasts = await weatherService.getForecastByLocationKey(key)
            dispatch({ type: 'SET_FORECASTS', forecasts })
        } catch (err) {
            console.log('there is a problem in loading forecasts in loadForeacsts action', err)
        }

    }
}



export function loadCurrentLocation() {
    return async dispatch => {
        try {
            const currLocation = await weatherService.getLocation()
            dispatch({ type: 'SET_CURRLOCATION', currLocation })
        } catch (err) {
            console.log('there is a problem in loading currLocation in loadCurrentLocation action', err)
        }

    }
}

export function updateCurrentLocation(location) {
    weatherService.saveLocation(location)
    return (dispatch) => dispatch({ type: 'SET_CURRLOCATION', currLocation: location })
}

export function loadFavoriteCities() {
    return async dispatch => {
        try {
            const favoriteCities = await weatherService.query()
            dispatch({ type: 'SET_FAVORITE_CITIES', favoriteCities })
        } catch (err) {
            console.log('there is a problem in loading favotite city in loadFavoriteCities action', err)
        }

    }
}



export function setFilter(filterBy) {
    return async dispatch => {
        try {
            const type = 'SET_FILTER'
            dispatch({ type, filterBy })

        } catch (err) {
            console.log('there is problem in set filter action')
            throw err
        }
    }
}



export function setTemperatureMode(isFahrenheitOn) {
    return async dispatch => {
        try {
            const type = 'SET_TEMPERATURE_CONVERSION'
            dispatch({ type, isFahrenheitOn })

        } catch (err) {
            console.log('there is problem in set filter action')
            throw err
        }
    }
}


export function setThemeMode(isDarkMode) {
    return async dispatch => {
        try {
            const type = 'SET_THEME_MODE'
            dispatch({ type, isDarkMode })

        } catch (err) {
            console.log('there is problem in set filter action')
            throw err
        }
    }
}