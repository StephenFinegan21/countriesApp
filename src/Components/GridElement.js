import React from 'react'

const GridElement = ( {data} ) => {

    console.log(data[0])
  return (
    <>
     {data.map(country =>  
        <div className = 'grid-element' key={country.name.common}>
            <img src={country.flags.png} alt='flag'/>
            <p>{country.name.common}</p>
            <p>{country.capital}</p>
            <p>{country.population}</p>
        </div>
   
     )}
    </>
  )
     }

export default GridElement