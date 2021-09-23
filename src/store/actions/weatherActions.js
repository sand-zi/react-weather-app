import { weatherService } from '../../services/weatherService.js'


export function loadForeacsts() {
    return async dispatch => {
        try {
            const forecasts = await weatherService.query()
            dispatch({ type: 'SET_FORECASTS', forecasts })
        } catch (err) {
            console.log('there is a problem in loading forecasts in loadForeacsts action', err)
        }

    }
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


// export function removeToy(toyId) {
//     return async dispatch => {
//         try {
//             await weatherService.remove(toyId)
//             dispatch({ type: 'REMOVE_TOY', toyId })

//         } catch (err) {
//             console.log('there is problem in removing toy action')
//             throw err
//         }
//     }
// }


// export function saveToy(toyToSave) {
//     return async dispatch => {
//         try {
//             const type = toyToSave._id ? 'UPDATE_TOY' : 'ADD_TOY'
//             const toy = await weatherService.save(toyToSave)
//             dispatch({ type, toy })

//         } catch (err) {
//             console.log('there is problem in save toy action')
//             throw err
//         }
//     }
// }

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