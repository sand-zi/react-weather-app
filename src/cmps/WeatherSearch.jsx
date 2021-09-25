import { useState, useRef } from 'react'
import debounce from 'lodash.debounce';
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';


import { weatherService } from '../services/weatherService.js'
const customId = "error-toast";
const throwError = (msg) => {
    toast.error(msg, { autoClose: 3000, toastId: customId })
};

export const WeatherSearch = ({setOptions}) => {
    const [value, setValue] = useState('');
 
    const performSearch = async (input) => {
        const locationOptions = await weatherService.getLocationsList(input)
        if (locationOptions.length) {
            setOptions([...locationOptions])
        }
    }
    const debouncedSearch = useRef(debounce(input => performSearch(input), 2000)).current


    const onHandleChange = event => {
        const { value } = event.target
        setValue(value)
        let isEnglish = /^[a-zA-Z\s]*$/.test(value)

        if (value.length > 0 && isEnglish) {
            debouncedSearch(value)
        }
        else if (value.length > 0) {
            throwError("The search is available on English only")
            return
        }

    }

    return (
        <div className="weather-search">
            <ToastContainer />
            <TextField
                value={value}
                onChange={(ev) => onHandleChange(ev)}
                label="Location Search"
                variant="outlined"

            />

        </div>
    );
}