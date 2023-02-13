import React from 'react'
import '../App.css';
import bowser from '../pictures/bowser.png'
import bill from '../pictures/billcipher.png'
import courage from '../pictures/courage.png'
import universe from '../pictures/universe113.jpg'

function Popup(props) {

  return (props.buttonPopup) ? (
    <div className='popupContainer'> 
    <div className='popupBox'>
        <img src={universe} alt="Universe 113" className='mapImg'/>
        <div className='characterContainer'>
            <div> <strong> Universe 113  </strong> 
                <div className='imageCredit'>by Egor Klyuchnyk </div>
            </div>
            <div className='levelContainer'> 
                <img src={bowser} alt="Character bowser" className='miniImg'/> 
                <div> 
                    <strong>  Bowser </strong> 
                    <div> Super Mario bros </div> 
                </div>  
                <div className='easyLevel'>
                    Easy
                </div>
            </div>
            <div className='levelContainer'>
                <img src={bill} alt="Character bill cipher"  className='miniImg'/> 
                <div> 
                    <strong>  Bill Cipher </strong> 
                    <div> Gravity Falls </div> 
                </div>
                <div className='medLevel'>
                    Medium
                </div>
            </div>
            <div className='levelContainer'> 
                <img src={courage} alt="Character courage"  className='miniImg'/> 
                <div> 
                    <strong>  Courage </strong> 
                    <div> The Cowardly Dog </div>
                </div>
                <div className='hardLevel'>
                    Hard
                </div>
            </div>
            <div>
                <button className='startBtn' onClick={()=> props.startGame()}> Start</button> 
            </div>
        </div>
    </div>
    </div>
  ) : ""
}

export default Popup