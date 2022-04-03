import React from 'react'
import { Link } from 'react-router-dom'

const QuizType = () => {
    return (
        <>
            <div className='quiz-types flex-all-cen flex-wrap'>
                <div quiz-type-card>
                    <div className="card-with-textoverlay card">
                        <h2 className="card-title xsm-h card-overlay-text sm-h">Cricket Quiz</h2>
                        <img className="card-img" src="https://source.unsplash.com/400x400/?cricket" alt="Image"/>
                            <div className="card-body">
                                <p className="card-subtitle sm-text gray-text">Test your knowledge of cricket with this fun and free Jackpot Cricket Quiz. </p>
                            </div>
                            <div className="card-footer">
                                <Link to="/questions">
                                    <button className="card-btn-primary">Play Quiz</button>
                                </Link>
                            </div>
                    </div>
                </div>
                <div quiz-type-card>
                    <div className="card-with-textoverlay card">
                        <h2 className="card-title xsm-h card-overlay-text sm-h">Football Quiz</h2>
                        <img className="card-img" src="https://source.unsplash.com/400x400/?football" alt="Image"/>
                            <div className="card-body">
                                <p className="card-subtitle sm-text gray-text">Test your football trivia knowledge now! Here's our best ever football quiz</p>
                            </div>
                            <div className="card-footer">
                                <Link to="/questions">
                                    <button className="card-btn-primary">Play Quiz</button>
                                </Link>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuizType