import {React, useState} from 'react'
import { Link } from 'react-router-dom'

//List of all countries passed in as props from App Component
//Stored in 'data' variable
const GridElement = ( {data} ) => {

  const [searchFilter, setSearchFilter] = useState()

  const filterCountries = () => {
    const newData = data.filter(c => c.name.common.toLowerCase().includes(searchFilter.toLowerCase()))
    return newData
  }

  const updateFilter = (event) => {
    setSearchFilter(event.target.value)
    
  }
  

  

  return (
    <>
    <input onChange={updateFilter} ></input>
     {filterCountries().map(country =>  
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