import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Popup from './components/Popup';
import HighScore from './components/HighScore';
import { useState } from 'react';
import axios from "axios"


function App() {
  const [buttonPopup, setButtonPopup] = useState(true)
  const [seconds, setSeconds] = useState(0)
  const [numberFound, setNumberFound] = useState(3)
  const [gameOver, setGameOver] = useState(false)
  const [foundBanner, setFoundBanner] = useState("")
  const [wrongBanner, setWrongBanner] = useState("")
  const [data, setData] = useState([]);
  const [start, setStart] = useState()
  const [finalRecord, setFinalRecord] = useState()


  const startGame = () => {
      setButtonPopup(false)
      startTimer()
      startTime()
  }
  const startTime = () => {
    setStart(Date.now())
  }

  const finalTime = () => {
    //To let page render first then change the display text to final score
    setTimeout(() => {
     const milliSec  = Date.now() - start;
     const sec = (milliSec-1)/1000
     const rounded = sec.toFixed(1)
     setFinalRecord(rounded)
     document.querySelector('.finalScore').innerHTML =  
          "GAME OVER, your final time is: " + rounded + " seconds"
    }, 1);
  };


  const startTimer = () => {
    setInterval(() => {
        setSeconds(seconds => seconds + 1)
      }, 1000)
  }
  

  const stopTimer = () => {
    clearInterval(setSeconds(0))
  }
 
  function timeId() {
    setTimeout(() => {
     // After 2 seconds set the show value to false
     setFoundBanner("")
     setWrongBanner("")
   }, 2000)
 }
  const fetchData = () => {
  return axios.get("http://localhost:5000/waldo/scores")
        .then((response) => 
        setData(response.data));
  }

  return (
    <>
    <Header  
      seconds = {seconds}
      numberFound = {numberFound}
      foundBanner = {foundBanner}
      wrongBanner = {wrongBanner}
      />
    <Popup 
      buttonPopup = {buttonPopup}
      startGame = {startGame}
      />

    <Main 
      setNumberFound = {setNumberFound}
      numberFound = {numberFound}
      setFoundBanner = {setFoundBanner}
      setWrongBanner = {setWrongBanner}
      timeId = {timeId}
      setGameOver = {setGameOver}
      fetchData = {fetchData}
      finalTime = {finalTime}

      />
    <HighScore 
      gameOver = {gameOver}
      setGameOver = {setGameOver}
      stopTimer = {stopTimer}
      data = {data}
      fetchData = {fetchData}
      startTime = {startTime}
      finalRecord = {finalRecord}

      />
  
    </>
  );
}

export default App;
