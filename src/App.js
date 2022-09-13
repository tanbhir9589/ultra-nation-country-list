import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react'
import Country from './Components/Country/Country';
import Cart from './Components/Cart/Cart';


function App() {
 const [countries,setCountries]= useState([])
 const [counrtyAdd,setCountryAdd] = useState([])
 useEffect(()=>{
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => {setCountries(data)
    })
 },[])
   const handlerCountryAdd = (country) => {
     const newCountryAdd =[...counrtyAdd, country];
     setCountryAdd(newCountryAdd)
  }
  return (
    <div className="App">
      <h1>Country Loaded : {countries.length}</h1>
      <h3>Country Added : {counrtyAdd.length} </h3>
      <Cart cart={counrtyAdd}></Cart>
      {
        countries.map(count => <Country country={count} handlerCountryAdd={handlerCountryAdd} ></Country>)
       
      }
      <ul>
       
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
