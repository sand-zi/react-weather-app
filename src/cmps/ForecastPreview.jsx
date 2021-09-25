
import { useState } from 'react';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});
String.fromCodePoint(parseInt('0x2103', 16))
export const ForecastPreview = ({ forecast, isFahrenheit, setIsFahrenheit }) => {

    const [isDayForecastShown, setIsDayForecastShown] = useState(true)

    const temoUnicode = (isFahrenheit) ? String.fromCodePoint(parseInt('0x2109', 16)) : String.fromCodePoint(parseInt('0x2103', 16))

    const convertTemp = (temp) => {
        return (isFahrenheit) ? ((temp * 9 / 5) + 32) : temp
    }
    return (
        <div className="forecast-preview">
            <Paper sx={{ p: 2, margin: 'auto', flexGrow: 1, width: 200 }}>
                <Grid container direction="column"
                    justifyContent="center"
                    alignItems="center">
                    <Grid item>
                        <ButtonBase sx={{ width: 128, height: 128 }}>
                            <Img alt="complex" src={(isDayForecastShown) ? require(`../assets/images/${forecast.dayForecast.icon}.png`).default : require(`../assets/images/${forecast.nightForecast.icon}.png`).default} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="body2" component="div" textAlign='center'>
                                    {forecast.date}
                                </Typography>
                                <Typography variant="body2" gutterBottom textAlign='center'>
                                    {(isDayForecastShown) ? forecast.dayForecast.iconPhrase : forecast.nightForecast.iconPhrase}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" textAlign='center'>
                                    {(isDayForecastShown) ? convertTemp(+forecast.dayForecast.temperature) : convertTemp(+forecast.nightForecast.temperature)}
                                    {temoUnicode}

                                </Typography>
                            </Grid>
                            <Grid item>

                                <Typography sx={{ cursor: 'pointer' }} variant="body2" onClick={() => setIsDayForecastShown(!isDayForecastShown)} textAlign='center'>
                                    Check {(isDayForecastShown) ? 'Night' : 'Day'} Forecast
                                </Typography>

                            </Grid>
                        </Grid>

                    </Grid>

                </Grid>
            </Paper>
        </div>
    )
}










