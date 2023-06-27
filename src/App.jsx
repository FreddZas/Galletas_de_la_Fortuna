import './App.css';
import LastPage from './components/LastPage.jsx';
import phrases from './data/phrases.json';
import clickSound from "./assets/sounds/soundBtn.mp3";
import { useRef } from 'react';
import { useState } from 'react';

function App() {

  const backgrounds = ["url(/fondos/fondo1.jpg)", "url(/fondos/fondo2.jpg)", "url(/fondos/fondo3.jpg)", "url(/fondos/fondo4.jpg)"];

  const audioRef = useRef(null);

  const [index, setIndex] = useState(0);

  const changePhrase = () => {
    const randomPhrase = Math.floor((Math.random() * phrases.length));
       setIndex(randomPhrase);
      };

  const [image, setImage] = useState(0);

  const changeBackground = () => {
    const randomImage = Math.floor((Math.random() * backgrounds.length));
    setImage(randomImage)
  };

  const superButton = () => {
    audioRef.current.play()
    changeBackground();
    changePhrase();
  };

  document.body.style.backgroundImage = `${backgrounds[image]}` ;
  

    return (
        <>  
            <LastPage
            data = { phrases [index]}
            backgrounds = { backgrounds[image]}
            
            />
            <audio ref={audioRef}>
              <source src={clickSound} type="audio/mp3" />
            </audio>
            <div className='btn_container'>
              <button onClick={superButton}>PRUEBA TU SUERTE</button>
            </div>
        </>
    )
};
  
export default App;

