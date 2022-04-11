import logo from './logo.svg';
import './App.scss';
import axios from 'axios';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log(response)
      })
  }, [])



  return (
    <div className="App">
      
    </div>
  );
}

export default App;
