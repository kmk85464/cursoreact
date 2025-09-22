import './App.css';
import Boton from './componentes/Boton';
import logo from './imagenes/logo.png'
import Pantalla from './componentes/Pantalla';
import Botonclear from './componentes/BotonClear';
import { evaluate } from 'mathjs';
import { useState} from 'react';
function App() {

//estado-hook
const [input, setInput] = useState('');

//funcion para agregar el valor del boton al input
const agregarInput = val => {
  setInput(input + val);
};

//funcion para calcular el resultado
const calcularResultado = () => {
  if (input){
  setInput(evaluate(input));
  } else {
    alert("Por favor ingrese valores para realizar los calculos");}
}


  return (
    <div className="App">
      <div classname="logo-container">
        <img src={logo} className="logo" alt="logo bot" />
      </div>
      <div className="calculadora-container">
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
        <Botonclear manejarClick={()=> setInput('')}
          >Clear
          </Botonclear>
      </div>
      </div>
    </div>
  );
}

export default App;
