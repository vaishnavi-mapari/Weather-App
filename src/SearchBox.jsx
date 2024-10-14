import * as React from 'react';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import InfoBOX from './InfoBOX';  // Import the InfoBOX component

const SearchBox = () => {
    const [city, setCity] = React.useState("");
    const [weatherData, setWeatherData] = React.useState(null);
    const [errorMessage, setErrorMessage] = React.useState(null);

    const API_KEY = '07229667aa2365bb869dd6bf1ffa88ea';  // Replace with your OpenWeatherMap API Key

    const handleCityName = (e) => {
        setCity(e.target.value);
    };

    const getCityTemp = async () => {
        try {
            const final_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
            const res = await axios.get(final_url);
            setWeatherData(res.data);  // Save the fetched weather data
            setCity('');  // Clear input
            setErrorMessage(null);  // Clear any error messages
        } catch (error) {
            console.error(error);
            setErrorMessage('Failed to retrieve data. Please check the city name or try again later.');
        }
    }

    return (
        <>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '30ch' } }}
                noValidate
                autoComplete="off"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <TextField 
                    id="outlined-basic" 
                    label="Enter City Name" 
                    variant="outlined" 
                    onChange={handleCityName} 
                    value={city} 
                    sx={{ marginBottom: '1rem' }}
                />
                <Button 
                    onClick={getCityTemp} 
                    variant="contained" 
                    endIcon={<SearchIcon />}
                    sx={{ marginLeft: '1rem', height: '56px' }}
                >
                    Search
                </Button>
            </Box>

            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            {/* Conditionally render InfoBOX when weatherData is available */}
            {weatherData && (
                <InfoBOX 
                    cityName={weatherData.name}
                    temp={weatherData.main.temp}
                    tempMax={weatherData.main.temp_max}
                    tempMin={weatherData.main.temp_min}
                    humidity={weatherData.main.humidity}
                    weatherDescription={weatherData.weather[0].description}
                    iconCode={weatherData.weather[0].icon}  // Pass the weather icon code
                />
            )}
        </>
    );
}

export default SearchBox;

