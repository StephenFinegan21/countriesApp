import logo from './logo.svg';
import './App.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [countries, setCountries] = useState()
  const [isLoading, setIsLoading] = useState(true)

  //Will fetch Data from API on first render of this component only 
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log(response.data[4].name.common)
        console.log(response.data[4].population)
        console.log(response.data[4].capital[0])
        setCountries(response.data[0].name.common)
        setIsLoading(false)
      })
  }, [])



  return (
    <div className="grid-container">
      {isLoading ?
        <p>Loading</p> :
        <p>{countries}</p> 
      
      
      
      }
  


      
    </div>
  );
}

export default App;
