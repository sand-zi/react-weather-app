const initialState = {
    currLocation: {
        localizedName: 'Tel Aviv',
        key: '215854',
        country: 'Israel'
    },
    forecasts: [],
    searchBy: {
        name: ''
    },
    favoriteCities: [],
    isDarkMode: false,
    isFahrenheitOn: false
}

// CHECK THE CURRCITY

export function weatherReducer(state = initialState, action) {

    switch (action.type) {
        case 'SET_CURRLOCATION':
            return { ...state, currLocation: action.currLocation}
        case 'SET_FORECASTS':
            return { ...state, forecasts: action.forecasts }
        case 'SET_FAVORITE_CITIES':
            return { ...state, favoriteCities: action.favoriteCities }
        case 'SET_SEARCH':
            return { ...state, searchBy: action.searchBy }
        case 'SET_THEME_MODE':
            return { ...state, isDarkMode: action.isDarkMode }
        case 'SET_TEMPERATURE_CONVERSION':
            return { ...state, isFahrenheitOn: action.isFahrenheitOn }
        default:
            return state
    }
}




// case 'ADD_FAVORITE_CITY':
//     return { ...state, favoriteCities: [...state.favoriteCities, action.favoriteCity] }
// case 'UPDATE_FAVORITE_CITY':
//     return { ...state, toys: state.toys.map(toy => (toy._id === action.toy._id) ? action.toy : toy) }
// case 'REMOVE_FAVORITE_CITY':
//     return { ...state, favoriteCities: state.favoriteCities.filter(toy => city._id !== action.cityId) }