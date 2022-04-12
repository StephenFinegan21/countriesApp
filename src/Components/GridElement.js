import {React, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

//List of all countries passed in as props from App Component
//Stored in 'data' variable
const GridElement = ( {data} ) => {

 
  

  

  return (
    <>
    
     {data.map(country =>  
      <Link to={`/country/${country.name.common}`} style={{ textDecoration: 'none', color: 'rgb(43, 43, 43)' }}>
        <div className = 'grid-element' key={country.name.official} >
            <img src={country.flags.png} alt='flag'/>
            <h2>{country.name.common}</h2>
            <p><span>Capital: </span> {country.capital}</p>
            <p><span>Population: </span>{country.population}</p>
        </div>
      </Link>
   
     )}
    </>
  )
     }

export default GridElement