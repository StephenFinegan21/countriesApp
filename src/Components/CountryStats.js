import React from 'react'

const CountryStats = ( { data }) => {
   
  // console.log(Object.values(data.currencies)[0].name)

    
  return (
      
    <div>
        
        <p>{data.capital}</p>
        <p>{data.population}</p>
        <p>{Object.values(data.currencies)[0].name}</p>
            {Object.values(data.languages)
                .map(language => 
                <li key={language}>{language}</li>
                )}
  
    </div>
  )
}

export default CountryStats