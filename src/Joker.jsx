import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';



const Joker = () => {

    const [joke,setJoke]=useState({setup:'',punchline:''})
    const URL= 'https://official-joke-api.appspot.com/jokes/random';

    const getNewJoke= async()=>{
        let response=await fetch(URL);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
        setJoke(jsonResponse);
    };

    useEffect(()=>{
    const URL= 'https://official-joke-api.appspot.com/jokes/random';
    console.log('use-effect is use');
    const getFirstJoke = async()=>{
        let response=await fetch(URL);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
        setJoke(jsonResponse);
    };
    getFirstJoke();
    });

    

  return (
    <div>
      <h1>Welcome to Joker App</h1>
      <h2>{joke.setup}</h2>
      <h4>{joke.punchline}</h4>
      <Button variant="outlined" onClick={getNewJoke}>Get Joke's</Button>
    </div>
  )
}

export default Joker
