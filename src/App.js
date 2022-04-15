import "./App.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import GridContainer from "./Components/GridContainer";
import Loader from "./Components/Loader";
import Filter from "./Components/Filter";

function App() {
  const [initialCountries, setInitialCountries] = useState([]); //Initial variable to store data fetched by API
  const [isLoading, setIsLoading] = useState(true); //set to false after data is fetched
  const [searchFilter, setSearchFilter] = useState(""); //Stores search term that user can filter by

  //Will fetch Data from API on first render of this component only
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setInitialCountries(response.data);
        setIsLoading(false); //App can render data after data is fetched
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //Updates the searchfilter
  const updateFilter = (event) => {
    setSearchFilter(event.target.value);
  };

  return (
    <>
      <div className="container">
        <Filter onChange={updateFilter} />
        <div className="grid-container">
          {/* While data is loading from API (isLoading === true) display Loading message to user */}
          {isLoading && <Loader />}

          {!isLoading && (
            <GridContainer
              data={initialCountries}
              searchFilter={searchFilter}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
