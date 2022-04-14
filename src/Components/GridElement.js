import {React, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

//List of all countries passed in as props from App Component
//Stored in 'data' variable
const GridElement = ( {data} ) => {

  const [sort, setSort] = useState('alpha')

  useEffect(()=> {
    data.sort((a, b) => a.name.common.localeCompare(b.name.common))
   
  // console.log(data)
  }, [])
  //console.log(data.map(m => m.population))



  const changeSort = () => {
    if(sort === 'alpha'){
      setSort('population')
      data.sort((a, b) => a.population - b.population )
    }
    else if(sort === 'population'){
      setSort('alpha')
      data.sort((a, b) => a.name.common.localeCompare(b.name.common))
    }
  }
  

  return (
    <>
    <button onClick={changeSort}>Population</button>
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