import './App.css';
import vuelosData from './mocked/vuelos.json'
import { useEffect, useState } from 'react';
import {Listado} from './components/Listado'
function App() {

//estado para los vuelos

const [vuelos, setVuelos]=useState([]);

useEffect (() => {
if (Array.isArray(vuelosData)){

  setVuelos(vuelosData);
}
},[]);


  return (
    <>
    <div className="App">
      <header className="App-header">
         <h1>Ejercicio Vuelos</h1>
         <Listado vuelos={vuelos} />
      </header>
    </div>

    </>
  );


}

export default App;
