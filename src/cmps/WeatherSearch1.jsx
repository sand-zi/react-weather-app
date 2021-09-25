import { useEffect, useCallback, useState } from 'react'
import debounce from 'lodash.debounce';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

import { weatherService } from '../services/weatherService.js'


export const WeatherSearch1 = () => {

    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const loading = open && options.length === 0;
    const [value, setValue] = useState('');


    useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            const locationOptions = await weatherService.getLocationsList(value); 

            if (active) {
                setOptions([...locationOptions]);
            }
        })();

        return () => {
            active = false;
        };
    }, [loading]);

    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);


    const onHandleChange = (event) => {
        const {target} = event
   
        let res = /^[a-zA-Z]+$/.test(target.value)
        if(res){
            setValue(target.value)
        }
        else return
    }

    const onDebouncedChangeHandler = useCallback(
        debounce(onHandleChange , 300)
      , []);

    return (
        <Autocomplete
            id="asynchronous-demo"
            sx={{ width: 300 }}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            // isOptionEqualToValue={(option, value) => option.localizedName === value.localizedName}
            getOptionLabel={(option) => option.localizedName}
            options={options}
            loading={loading}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search City"
                    value={value}
                    onChange={onDebouncedChangeHandler}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </>
                        ),
                    }}
                />
            )}
        />
    );
}