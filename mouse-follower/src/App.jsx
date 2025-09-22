import { useState,useEffect} from 'react'

import './App.css'
function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x:0,y:0})

  useEffect(() => {
    console.log('efecto', { enabled })
    const handleMove = (event) => {
      const {clientX, clientY} = event
      console.log('handleMove', {clientX, clientY})
      setPosition({x:clientX, y:clientY})
    }
    if (enabled){
    window.addEventListener('pointermove',handleMove)
    }
  }, [enabled])
  console.log('render')

  return (
    <main>
   <div style={{
    position: 'absolute',
    width: '40px',
    border: '2px solid #09f',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#09f',
    opacity: 0.8,
    pointerEvents: 'none',
    left: -20,
    top: -20,
    transform: `translate(${position.x}px,${position.y}px)`,
  }}
   />
     <button className='boton'onClick={() => setEnabled(!enabled)}>
      {enabled ? 'Desactivar':'Activar'} seguir puntero
    </button>
    </main>
  )
}

export default App
