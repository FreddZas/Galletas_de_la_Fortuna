import './App.css'
import LastPage from './components/LastPage.jsx'
import phrases from './data/phrases.json'

import { useState } from 'react'

function App() {

  const backgrounds = ["url(/fondos/fondo1.jpg)", "url(/fondos/fondo2.jpg)", "url(/fondos/fondo3.jpg)", "url(/fondos/fondo4.jpg)"]

  const [index, setIndex] = useState(0)

  const changePhrase = () => {
    const randomPhrase = Math.floor((Math.random() * phrases.length));
       setIndex(randomPhrase)
      }

  const [image, setImage] = useState(0);

  const changeBackground = () => {
    const randomImage = Math.floor((Math.random() * backgrounds.length));
    setImage(randomImage)
  }

  const superButton = () => {
    changeBackground();
    changePhrase();
  }

  document.body.style.backgroundImage = `${backgrounds[image]}` ;

    return (
        <>  
            <LastPage
            data = { phrases [index]}
            backgrounds = { backgrounds[image]}
            />
            <div className='tryLuck'>
              <button onClick={superButton}>PRUEBA TU SUERTE</button>
            </div>
        </>
    )
};
  
export default App

