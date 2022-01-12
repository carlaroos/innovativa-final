import logo from './logo.svg';
import './App.css';
import Popup from './Popup';
import './Popup.css'
import { DataProvider } from './shared/DataProvider';
import React from "react";
import Barometer from './Barometer';
import './Barometer.css'
import { useTeamState,useTeamEvent1, useTeamEvent } from './shared/api';
import { useState,useEffect } from 'react';
import {ExampleCards} from './Cards/ExampleCards';

function App() {
  
  const [buttonPopup,setButtonPopup] = useState(false);
  const [feelVALUE,setFeelVALUE] = useState(0);
  //const [teamet,setTeamet] = useState(null);


  useEffect(() => {
    setTimeout(() => {
      setButtonPopup(true)
    },3000);
  }, [])

  return (
    <><DataProvider>
      <div className="App">
      
        <Barometer feeling={feelVALUE} popup={buttonPopup} />
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup} feelVALUE={feelVALUE} setFeelVALUE={setFeelVALUE}>
          <div class="header"><h3>Frågor</h3>
          <h4>Använd knapparna framför dig för att svara på frågorna </h4>
       </div>
           </Popup>
      </div>
    </DataProvider>
   
    </>
     
  
  );
}

export default App;
