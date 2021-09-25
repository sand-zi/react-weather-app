import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';


export const CurrentLocationPreview = ({ isFahrenheit, setIsFahrenheit }) => {

    const [isFavorite, setIsFavorite] = useState(false)

    return (
        <section className="current-location">
            <Container maxWidth="sm">
                <Box >
                </Box>
                <Box >
                    <Button variant="outlined" startIcon={<ChangeCircleIcon />} onClick={() => setIsFahrenheit(!isFahrenheit)}>
                        Show Temperature in {(isFahrenheit) ? 'Fahrenheit' : 'Celsius'}
                    </Button>
                    <Button variant="outlined" startIcon={(isFavorite) ? <FavoriteIcon /> : <FavoriteBorderIcon />} onClick={() => setIsFavorite(!isFavorite)}>
                        Add To Favorites
                    </Button>
                </Box>
            </Container>
        </section>
    )

}