import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useCallback, useState } from 'react'


import { loadCurrentLocation, loadForeacsts, updateCurrentLocation } from '../store/actions/weatherActions.js'

import { ForecastList } from "../cmps/ForeacstList"
import { WeatherSearch } from "../cmps/WeatherSearch"

import { OptionList } from '../cmps/OptionList.jsx'

export const WeatherApp = () => {

    const { currLocation, forecasts } = useSelector(state => state.weatherModule)
    const [options, setOptions] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadCurrentLocation())
    }, [dispatch])

    useEffect(() => {
        dispatch(loadForeacsts(currLocation.key))
    }, [dispatch])

    const onSelectLocation = useCallback(location => {
        dispatch(updateCurrentLocation({ ...location }))
        setOptions([])
    })


    return (
        <div className="weather-app">
            <WeatherSearch setOptions={setOptions} />
            {(options.length > 0) && <OptionList options={options} onSelectLocation={onSelectLocation} />}
            {(forecasts.length > 0) && <ForecastList forecasts={forecasts} />}
        </div>
    )
}
