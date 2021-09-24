export const ForecastPreview = ({ forecast }) => {
    return (
        <div className="forecast-preview">
            <div className="day-forecast">
                <p className="date">{forecast['Date']}</p>
                {/* <button onClick=" toggleShowDayForecast()"> Show {showDayForecast ? 'Night Forecast ' : 'Day Forecast'}</button> */}
                <div className="day-forecast" >
                    <p className="description">
                        {forecast['Day']['IconPhrase']}
                    </p>
                    <p className="temperature">
                        {forecast['Temperature']['Maximum']['Value']}
                        <span className="temperature-unit"> {forecast['Temperature']['Maximum']['Unit']}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}



   // <ng-template #nightForecast>
        //     <div className="night-forecast">
        //         <p className="description">
        //             {{ forecast['Night']['IconPhrase'] }}
        //         </p>
        //         <p className="temperature">
        //             {{ forecast['Temperature']['Minimum']['Value'] }}
        //             <span className="temperature-unit"> {{ forecast['Temperature']['Minimum']['Unit'] }}</span>
        //         </p>
        //     </div>
        // </ng-template>