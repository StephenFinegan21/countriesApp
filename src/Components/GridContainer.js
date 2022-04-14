import {React, useState, useEffect} from 'react'

import CountryGridElement from './CountryGridElement'

//List of all countries passed in as props from App Component
//Stored in 'data' variable
const GridElement = ( {data, searchFilter} ) => {

  
  const [countries, setCountries] = useState(data) //Stores the list of all countries to be shown to user

  useEffect(() => {

      
    
    //When Search term is changed, update the countries to be shown
    setCountries(data.filter(c => c.name.common.toLowerCase().includes(searchFilter.toLowerCase())) )
    
  },[searchFilter])

 



  return (
    <>
    
     {countries && countries.map(country => 
    <CountryGridElement country = {country} />
      
     )}
    </>
  )
     }

export default GridElement