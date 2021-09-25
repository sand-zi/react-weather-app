
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

export const ForecastPreview = ({ forecast }) => {
    return (
        <div className="forecast-preview">
            <Paper sx={{ p: 2, margin: 'auto', maxWidth: 200, flexGrow: 1 }}>
                <Grid container direction="column"
                    justifyContent="center"
                    alignItems="center">
                    <Grid item>
                        <ButtonBase sx={{ width: 128, height: 128 }}>
                            <Img alt="complex" src={`./images/${forecast.dayForecast.icon}.png`} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="body2" component="div">
                                    {forecast.date}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    {forecast.dayForecast.iconPhrase}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {forecast.dayForecast.temperature}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                    Check Night Forecast
                                </Typography>
                            </Grid>
                        </Grid>

                    </Grid>

                </Grid>
            </Paper>
        </div>
    )
}










