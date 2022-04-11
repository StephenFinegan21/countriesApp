import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Country = () => {

    const urlParam = useParams().countryName
    const [currentCountry , setCurrentCountry] = useState()


    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${urlParam}`)
          .then(response => {
            console.log(response.data[0].name.common)
            setCurrentCountry(response.data[0])
            console.log(currentCountry)
           
          })
      }, [])
  
  return (
    <div>{urlParam}</div>
  )
}

export default Country