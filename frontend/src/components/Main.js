import React from 'react'
import { useEffect, useState } from 'react';
import '../App.css';
import universeImg from '../pictures/universe113.jpg'


function Main(props) {
  const {setNumberFound, numberFound, setFoundBanner, setWrongBanner, timeId, 
        setGameOver, fetchData , finalTime} = props
  
  const [bowserFound, setBowserFound] = useState(false)
  const [billFound, setBillFound] = useState(false)
  const [courageFound, setCourageFound] = useState(false)

  const [showChar, setShowChar] = useState(false);

  const [showLocation, setShowLocation] = useState();
  const [leftcoords, setLeftCoords] = useState(null);
  const [topcoords, setTopCoords] = useState(null);
    
  const imageClick = (e) => {
    const { xCoord, yCoord } = getLocationImageClick(e);
    setLeftCoords( xCoord );
    setTopCoords( yCoord )
    updateClickLocation({ xCoord, yCoord });
  };
  const getLocationImageClick = (e) => {
    const xCoord = Math.round(
      (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100
    );
    const yCoord = Math.round(
      (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100
    ); 
    return { xCoord, yCoord };
  };

  const updateClickLocation = (coords) => {
    const { xCoord, yCoord } = coords; 
    const popuplocation = { left: xCoord + "%", top: yCoord + "%", display: "block" }
    setShowLocation(popuplocation);
    setShowChar(prevState => !prevState)
  };
  
  function inBetween(x, min, max) {
    return x > min && x < max;
  }

  const bowserCheck = () => {
    if( inBetween(leftcoords ,43,51) && inBetween(topcoords, 35,40)) {
      setNumberFound(numberFound - 1) 
      setBowserFound(true)
      setFoundBanner('You found Bowser!')
      timeId()
      console.log("Bowser found")    
    } else {
      console.log("Not Bowser")
      setWrongBanner("That is not Bowser!")
      timeId()
    }
  }
  const billCheck = () => {
    if( inBetween(leftcoords ,70,72) && inBetween(topcoords, 64,67) ){
      setNumberFound(numberFound - 1) 
      setBillFound(true)
      setFoundBanner('You found Bill Cipher!')
      timeId()
      console.log("Bill cipher found")       
    } else {
      console.log("Not bill cipher")
      setWrongBanner("That is not Bill Cipher!")
      timeId()
    }
  }
  const courageCheck = () => {
    if(inBetween(leftcoords ,30.5,32.5) && inBetween(topcoords, 50.5,53.5)){
      setNumberFound(numberFound - 1) 
      setCourageFound(true)
      setFoundBanner('You found Courage!')
      timeId()
      console.log("Courage found")

    } else {
      console.log("not courage")
      setWrongBanner("That is not Courage!")
      timeId()
    }
  }
  
  //Resetting Game Info
  useEffect(() => {
    if (bowserFound && billFound && courageFound){
      fetchData()
      setGameOver(true)
      finalTime()
      setShowChar(false)
      setBowserFound(false)
      setBillFound(false)
      setCourageFound(false)
      setNumberFound(3)
    }
  }, [bowserFound, billFound, courageFound,numberFound]);
  
  return (
    <div className='mainContainer' >
        <img className='gameImg' src={universeImg} 
        alt="Showing various characters from universe 113" 
        onClick={imageClick}
        /> 
      {showChar ? (
      <div className='clickPopup' style={showLocation}>
        {!bowserFound ? (<div className='charChooseBow' onClick={bowserCheck}>Bowser </div>): ""}
        {!billFound ? (<div className='charChooseBill' onClick={billCheck}>Bill Cipher </div>): ""}
        {!courageFound ? (<div className='charChooseCour'onClick={courageCheck}>Courage </div>): ""}
      </div>
      ): ""}
    </div>
  )
}

export default Main