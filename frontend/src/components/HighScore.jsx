import React, { useEffect } from 'react'
import { useState } from "react"
import  axios  from 'axios'
import moment from 'moment'


function HighScore(props) {
  const {gameOver, setGameOver, data, fetchData, stopTimer, startTime, finalRecord } = props
  const [showForm, setShowForm] = useState(true)
 
  const [formData, setFormData] = useState({ username: '', })
  const [formDatas, setFormDatas] = useState({ timeCompleted: finalRecord, })  
  const {username} = formData
  const {timeCompleted} = formDatas

  const onChange = (e) => {
    setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
    }) )
  }
  useEffect(() => {
    setFormDatas(() => ({
      timeCompleted: finalRecord
    }), )
  }, [username, finalRecord])
  
  const onSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/waldo/scores', { username, timeCompleted })
    .then(res=>{
      console.log(res.data);
      fetchData()
    })
    setFormData({ username: '', })
    setFormDatas({ timeCompleted: '', })
    toggleForm()
  }   
  const restart = () => {
    setGameOver(false)
    stopTimer()
    setShowForm(true)
    startTime()
    setFormData({ username: '',})
  
  }
  const toggleForm = () => {
    setShowForm(false)
  }
 
    return ( gameOver ? (
         <div className='displayContainer'> 
            <div className="finalScore" id='finalScore'>     </div>
              <div className='tableContainer'>
                <div className='scoreboard'> LEADERBOARD (Top 5) </div>
                {data.map((item) => <div className='results' key={item._id}> 
                {"Username: " + (item.username) + ",  Time: "+ (item.timeCompleted) + " sec" 
                + "  on " + moment(item.timePosted).format("MMMM Do YYYY, h:mm A") }</div>)}
              </div> 
           {showForm ? (
            <section className="form">
            <form onSubmit={onSubmit}> 
            <div className="form-group">
              <label htmlFor="text"> Regsiter your time!</label>
              <div className="form-group">
                  <input type="text" className="form-control" id="username" 
                  name="username" 
                  required
                  value ={username}
                  placeholder= "Username" 
                  onChange={onChange}
                  autoComplete="off"
                  />
              </div>
              <div className="form-group">
                  <input type="number" className="form-control" id="timeCompleted" 
                  name="timeCompleted" 
                  required
                  value = {timeCompleted}
                  placeholder= "timeCompleted" 
                  readOnly = {true}
                 />
              </div>        
            </div>
            <div className="form-group">
              <button className="startBtn" type="submit" > Publish Score</button>
            </div>
            </form>
          </section>
            ) : "" }
          <button className='startBtn' onClick={()=> restart()}> Restart</button> 
          
         </div> ): ""
    )
}

export default HighScore