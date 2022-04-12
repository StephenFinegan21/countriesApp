import './App.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import GridElement from './Components/GridElement';
import Loader from './Components/Loader';

function App() {

  const [countries, setCountries] = useState() //Stores the list of all countries to be shown to user
  const [isLoading, setIsLoading] = useState(true) //set to false after data is fetched

  //Will fetch Data from API on first render of this component only 
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        //console.log(response.data[4].name.common)
        //console.log(response.data[4].population)
        //console.log(response.data[4].capital[0])
        console.log(response.data)
        setCountries(response.data)
        setIsLoading(false) //App can render data after data is fetched
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <>
    
    
    <div className="grid-container">
      {/* While data is loading from API (isLoading === true) display Loading message to user */}
      {isLoading && <Loader/>} 

      {!isLoading && 
        <GridElement 
        data = {countries}
      />}
    </div>
  </>
  );
}

export default App;
