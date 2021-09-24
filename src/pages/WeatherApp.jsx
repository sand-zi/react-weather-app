import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useCallback } from 'react'


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
    // const onGetLocation = async () => {
    //     const result =  await weatherService.getLocation()
    //     console.log('getting from the component', result)
    // }

    // const onGetLocationsList = async () => {
    //     const result =  await weatherService.getLocationsList("Tel")
    //     console.log(result)
    // }

    // const onGetForecastByLocationKey = async()=>{
    //     const result  = await weatherService.getForecastByLocationKey('215854')
    //     console.log(result)
    // }


    return (
        <div className="weather-app">
            {/* <div className="sample">
                <button onClick={onGetLocation}> Check getLocation</button>
                <button onClick={onGetForecastByLocationKey}>get Forecast By LocationKey</button>
                <button onClick={onGetLocationsList}>get Locations List</button>
            </div> */}
            <WeatherSearch />
            {forecasts.length && <ForecastList forecasts={forecasts} />}
        </div>
    )
}
