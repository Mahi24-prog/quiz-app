import React from 'react'
import { Link } from 'react-router-dom'
const Result = () => {
  return (
    <>
        <div className='result'>
            <h3 className='md-h center-text'>Result</h3>
            <h2 className='sm-h center-text'>Score : 8/10</h2>
        </div>
        <div className='questions-page-container'>
            <div className='question'>
                <h3 className='que-index sm-h'>Question 1</h3>
                <h2 className='md-h'>How many runs did India make in its historic World Cup win over West Indies in 1983?</h2>
                <div className='que-options flex-wrap'>
                    <button class="btn-outline-secondary btn outline-btn option-btn show-selected">374</button>
                    <button class="btn-outline-secondary btn outline-btn option-btn">175</button>
                    <button class="btn-outline-secondary btn outline-btn option-btn show-right">183</button>
                    <button class="btn-outline-secondary btn outline-btn option-btn">259</button>
                </div>
            </div>
            <div className='question'>
                <h3 className='que-index sm-h'>Question 2</h3>
                <h2 className='md-h'>Which cricketer has made the highest individual score at the World Cup??</h2>
                <div className='que-options flex-wrap'>
                    <button class="btn-outline-secondary btn outline-btn option-btn">Rahul Dravid</button>
                    <button class="btn-outline-secondary btn outline-btn option-btn show-right">Sourav Ganguly</button>
                    <button class="btn-outline-secondary btn outline-btn option-btn  show-selected">Sachin Tendulkar</button>
                    <button class="btn-outline-secondary btn outline-btn option-btn">Kapil Dev</button>
                </div>
            </div>
            
            <Link to="/">
                <button class="btn-success btn que-submit-btn">Go to Home</button>
            </Link>
        </div>
    </>
  )
}

export default Result