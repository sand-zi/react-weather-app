import { ForecastPreview } from "./ForecastPreview"

export const ForecastList = ({ forecasts }) => {
    return (
        <div className="forecast-list">
            {forecasts.map(forecast => <ForecastPreview key={forecast.forecastId} forecast={forecast} />)}

        </div>
    )
}