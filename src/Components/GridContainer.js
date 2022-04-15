import { React, useState, useEffect } from "react";

import CountryGridElement from "./CountryGridElement";

//List of all countries passed in as props from App Component
//Stored in 'data' variable
const GridContainer = ({ data, searchFilter, sortAlpha }) => {
  const [countries, setCountries] = useState(); //Stores the list of all countries to be shown to user

  useEffect(() => {
    //When Search term is changed, update the countries to be shown
    setCountries(
      data.filter((c) =>
        c.name.common.toLowerCase().includes(searchFilter.toLowerCase())
      )
    );
  }, [searchFilter, data]);

  useEffect(() => {
    //When Search term is changed, update the countries to be shown
  }, [sortAlpha]);

  return (
    <>
      {countries &&
        countries.map((country) => (
          <CountryGridElement key={country.name.common} country={country} />
        ))}
    </>
  );
};

export default GridContainer;
