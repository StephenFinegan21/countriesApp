import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CountryStats from '../Components/CountryStats'
import { Link } from 'react-router-dom'
import Loader from '../Components/Loader'

const Country = () => {

    const urlParam = useParams().countryName //Gets the Country from the URL
    const [currentCountry , setCurrentCountry] = useState() //Current country being viewed
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
        {/* While data is loading from API (isLoading === true) display Loading message to user */}
        {isLoading && <Loader/>} 

        {!isLoading && 
            <>
                
                <div className='flag-container'>
                <button><Link to={`/`} style={{ textDecoration: 'none', color: 'inherit' }}>Back To All Countries</Link></button>
                <h2>{currentCountry.name.common}</h2>
                <img src={currentCountry.flags.png}></img>
                </div>
                <CountryStats data = {currentCountry} />
            </>
         }
    </div>
  )
}

export default Country