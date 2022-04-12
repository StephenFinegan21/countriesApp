import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CountryStats from '../Components/CountryStats'
import { Link } from 'react-router-dom'

const Country = () => {

    const urlParam = useParams().countryName
    const [currentCountry , setCurrentCountry] = useState()
    const [isLoading, setIsLoading] = useState(true) //set to false after data is fetched


    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${urlParam}`)
          .then(response => {
           // console.log(response.data[0].name.common)
            setCurrentCountry(response.data[0])
            //console.log(currentCountry)
            setIsLoading(false)
           
          })
      }, [])
  
  return (
    <div className='country-information'>
         {isLoading ?
            <p>Loading</p> :
            <>
                <Link to={`/`} style={{ textDecoration: 'none', color: 'rgb(43, 43, 43)' }}>Home</Link>
                <h2>{currentCountry.name.common}</h2>
                <img src={currentCountry.flags.png}></img>
                <CountryStats data = {currentCountry} />
            </>
         }
    </div>
  )
}

export default Country