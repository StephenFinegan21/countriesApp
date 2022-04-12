import React from 'react'

const CountryStats = ( { data }) => {
   
  // console.log(Object.values(data.currencies)[0].name)
  console.log((data.borders.map(m => m)))
  console.log(data)
  return (
      
    <div>
        <p><span>Capital: </span>{data.capital}</p>
        <p><span>Population: </span>{data.population}</p>
        <p><span>Currencies: </span>{Object.values(data.currencies)[0].name}</p>
        <span>Languages: </span>
            {Object.values(data.languages)
                .map(language => 
                <li key={language}>{language}</li>
            )}
        <h2>Bordering Countries</h2>
        <div className='bordering-countries-grid'>
            {data.borders.map(country => 
                <li>{country}</li>)}
       </div>
    </div>
  )
}

export default CountryStats