import React from 'react'
import { Link } from 'react-router-dom'

const GridElement = ( {data} ) => {

    console.log(data[0])
  return (
    <>
     {data.map(country =>  
      <Link to={`/country/${country.name.common}`} style={{ textDecoration: 'none', color: 'rgb(43, 43, 43)' }}>
        <div className = 'grid-element' key={country.name.common} >
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