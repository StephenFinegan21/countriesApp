import './App.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import GridElement from './Components/GridElement';
import Loader from './Components/Loader';
import Filter from './Components/Filter';

function App() {

  const [initialCountries, setInitialCountries] = useState ([]) //Initial variable to store data fetched by API
  const [isLoading, setIsLoading] = useState(true) //set to false after data is fetched
  const [searchFilter, setSearchFilter] = useState() //Stores search term that user can filter by
  const [countries, setCountries] = useState() //Stores the list of all countries to be shown to user
  
  useEffect(() => {
    //When Search term is changed, update the countries to be shown
    setCountries(initialCountries.filter(c => c.name.common.toLowerCase().includes(searchFilter.toLowerCase())) )

  },[searchFilter])

  //Will fetch Data from API on first render of this component only 
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        //console.log(response.data[4].name.common)
        setInitialCountries(response.data)
        setIsLoading(false) //App can render data after data is fetched
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  //Updates the searchfilter
  const updateFilter = (event) => {
    setSearchFilter(event.target.value)
   }

  return (
    <>
    
    <Filter onChange ={updateFilter} />
    <div className="grid-container">
    
      {/* While data is loading from API (isLoading === true) display Loading message to user */}
      {isLoading && <Loader/>} 

      {!isLoading && 
        
        <GridElement 
      data = {searchFilter ? countries : initialCountries /*If a search filter exists show filtered list, else show initial (all countries) */} 
      />}
    </div>
  </>
  );
}

export default App;
