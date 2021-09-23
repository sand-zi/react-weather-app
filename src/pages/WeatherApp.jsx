import { ForecastList } from "../cmps/ForeacstList"
import { WeatherSearch } from "../cmps/WeatherSearch"
import { weatherService } from "../services/weatherService.js"


export const WeatherApp = () => {

    const onGetLocation = async () => {
        const result =  await weatherService.getLocation()
        console.log('getting from the component', result)
    }

    const onGetLocationsList = async () => {
        const result =  await weatherService.getLocationsList("Tel")
        console.log(result)
    }

    const onGetForecastByLocationKey = async()=>{
        const result  = await weatherService.getForecastByLocationKey('215854')
        console.log(result)
    }


    return (
        <div className="weather-app">
            <div className="sample">
                <button onClick={onGetLocation}> Check getLocation</button>
                <button onClick={onGetForecastByLocationKey}>get Forecast By LocationKey</button>
                <button onClick={onGetLocationsList}>get Locations List</button>
            </div>
            <WeatherSearch />
            <ForecastList />
        </div>
    )
}
