import React from 'react'
import { Link } from 'react-router-dom'

const Questions = () => {
  return (
    <>
        <div className='questions-page-container'>
            <div className='question'>
                <h3 className='que-index sm-h'>Question 1</h3>
                <h2 className='md-h'>How many runs did India make in its historic World Cup win over West Indies in 1983?</h2>
                <div className='que-options flex-wrap'>
                    <button class="btn-outline-secondary btn outline-btn option-btn">374</button>
                    <button class="btn-outline-secondary btn outline-btn option-btn">175</button>
                    <button class="btn-outline-secondary btn outline-btn option-btn write-option">183</button>
                    <button class="btn-outline-secondary btn outline-btn option-btn">259</button>
                </div>
            </div>
            <div className='question'>
                <h3 className='que-index sm-h'>Question 2</h3>
                <h2 className='md-h'>Which cricketer has made the highest individual score at the World Cup??</h2>
                <div className='que-options flex-wrap'>
                    <button class="btn-outline-secondary btn outline-btn option-btn">Rahul Dravid</button>
                    <button class="btn-outline-secondary btn outline-btn option-btn write-option">Sourav Ganguly</button>
                    <button class="btn-outline-secondary btn outline-btn option-btn">Sachin Tendulkar</button>
                    <button class="btn-outline-secondary btn outline-btn option-btn">Kapil Dev</button>
                </div>
            </div>
            <Link to="/result">
                <button class="btn-success btn que-submit-btn">Submit</button>
            </Link>
        </div>
    </>
  )
}

export default Questions