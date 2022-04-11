import React from 'react'

const GridElement = ( {data} ) => {

    console.log(data[0])
  return (
    <>
     {data.map(country =>  
        <div className = 'grid-element' key={country.name.common} >
            <img src={country.flags.png} alt='flag'/>
            <h2>{country.name.common}</h2>
            <p><span>Capital: </span> {country.capital}</p>
            <p><span>Population: </span>{country.population}</p>
        </div>
   
     )}
    </>
  )
     }

export default GridElement