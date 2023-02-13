import React from 'react'
import '../App.css';

function Header(props) {
      
  return (
  
    <nav className="headerContainer">
      <div className="title"> 
        FIND THEM
      </div>
      <div> Time: {props.seconds} seconds </div>
      <div className='circle'> {props.numberFound} </div>   
      {props.foundBanner? (<div className='foundBanner'> {props.foundBanner} </div>) : ""}
      {props.wrongBanner? (<div className='wrongBanner'> {props.wrongBanner} </div>) : ""}
    </nav>
    
  )
}

export default Header