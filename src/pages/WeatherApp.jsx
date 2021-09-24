import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useCallback, useState } from 'react'


import { loadCurrentLocation, loadForeacsts } from '../store/actions/weatherActions.js'

import { ForecastList } from "../cmps/ForeacstList"
import { WeatherSearch } from "../cmps/WeatherSearch"
import { weatherService } from "../services/weatherService.js"




export const WeatherApp = () => {

    const { currLocation, forecasts } = useSelector(state => state.weatherModule)
  
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadCurrentLocation())
    }, [dispatch])

    useEffect(() => {
        dispatch(loadForeacsts(currLocation.key))
    }, [dispatch])


    return (
        <div className="weather-app">

            <WeatherSearch />
            {forecasts.length && <ForecastList forecasts={forecasts} />}
        </div>
    )
}
