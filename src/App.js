import logo from './logo.svg';
import './App.scss';
import axios from 'axios';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log(response.data[4].name.common)
        console.log(response.data[4].population)
        console.log(response.data[4].capital[0])
      })
  }, [])



  return (
    <div className="App">
      
    </div>
  );
}

export default App;
