import logo from './logo.svg';
import './App.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import GridElement from './Components/GridElement';

function App() {

  const [countries, setCountries] = useState()
  const [isLoading, setIsLoading] = useState(true) //set to false after data is fetched

  //Will fetch Data from API on first render of this component only 
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        //console.log(response.data[4].name.common)
        //console.log(response.data[4].population)
        //console.log(response.data[4].capital[0])
        setCountries(response.data)
        setIsLoading(false)
      })
  }, [])



  return (
  
    <div className="grid-container">
      {isLoading ?
        <p>Loading</p> :
        <GridElement 
          data = {countries}
        />
      
      
      
      }
  


      
    </div>
  );
}

export default App;
