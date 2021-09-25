import { ForecastPreview } from "./ForecastPreview"
import Grid from '@mui/material/Grid';
import { CurrentLocationPreview } from "./CurrentLocationPreview";
import { useState } from "react";
export const ForecastList = ({ forecasts }) => {
    const [isFahrenheit, setIsFahrenheit] = useState(false)
    return (
        <div className="forecast-list">
            <CurrentLocationPreview isFahrenheit={isFahrenheit} setIsFahrenheit={setIsFahrenheit} />
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {forecasts.map(forecast => (
                    <Grid item key={forecast.forecastId}>
                        <ForecastPreview forecast={forecast} isFahrenheit={isFahrenheit} setIsFahrenheit={setIsFahrenheit} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}