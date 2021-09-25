import { ForecastPreview } from "./ForecastPreview"
import Grid from '@mui/material/Grid';
export const ForecastList = ({ forecasts }) => {
    return (
        <div className="forecast-list">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {forecasts.map(forecast => (
                    <Grid item key={forecast.forecastId}>
                        <ForecastPreview forecast={forecast} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}