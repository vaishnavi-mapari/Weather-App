import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function InfoBOX({ cityName, temp, tempMax, tempMin, humidity, weatherDescription, iconCode }) {
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;  // Construct icon URL

  return (
    <Card sx={{ maxWidth: 345, mt: 3, mx: 'auto', boxShadow: 3 }}>
      <CardMedia
        sx={{ height: 140, backgroundSize: 'contain', backgroundColor: '#f5f5f5' }}
        image={iconUrl}  // Weather icon as image
        title={weatherDescription}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cityName}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1)}
        </Typography>
        <Typography variant="body1">
          <strong>Temperature:</strong> {temp}°C
        </Typography>
        <Typography variant="body1">
          <strong>Max Temp:</strong> {tempMax}°C
        </Typography>
        <Typography variant="body1">
          <strong>Min Temp:</strong> {tempMin}°C
        </Typography>
        <Typography variant="body1">
          <strong>Humidity:</strong> {humidity}%
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
