import React from 'react'

const CountryStats = ( { data }) => {
   
  //console.log(Object.values(data.currencies)[0].name)
  //console.log((data.borders.map(m => m)))
  
  return (
  <>   
    <div className='country-stats'>
        <div> <h2>Capital</h2> <p>{data.capital}</p></div>
        <div> <h2>Population</h2> <p>{data.population}</p></div>
        <div> <h2>Currencies</h2><p>{Object.values(data.currencies)[0].name}</p></div>
        
        <div><h2>Languages</h2>
            <div className='list-grid'>
                {Object.values(data.languages)
                    .map(language => 
                    <li key={language}>{language}</li>
            )}
            </div>
        </div>

        <div>
            <h2>Bordering Countries</h2>
            <div className='list-grid'>
                {data.borders && data.borders.map(country => 
                <li key={country}>{country}</li>)}
             </div>
       </div>
    </div>
    
</> 
  )
}

export default CountryStats