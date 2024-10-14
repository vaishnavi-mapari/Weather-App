import React from 'react'
import SearchBox from './SearchBox'
import { Container, Typography } from '@mui/material'

const WeatherAPP = () => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', marginTop: '2rem' }}>
      <Typography variant="h2" component="h1" gutterBottom sx={{ color: '#1976d2' }}>
        Welcome to WeatherApp
      </Typography>
      <Typography variant="body1" gutterBottom>
        Search for a city to get its current weather conditions
      </Typography>
      <SearchBox />
    </Container>
  )
}

export default WeatherAPP;
