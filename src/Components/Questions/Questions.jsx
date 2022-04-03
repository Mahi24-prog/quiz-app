import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core';

const Questions = () => {
    const[loader, setLoader] = useState(true)
    const [questionsList, setQuestionsList] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await axios.get("https://opentdb.com/api.php?amount=5&category=21&difficulty=easy")
            setLoader(false)
            setQuestionsList(response.data.results)
        }
        )();
    }, [])

    return (
        <>
            <div className='questions-page-container'>
                {loader && <CircularProgress className='lg-h loader'/>}
                {
                    questionsList.map((question, index) => {
                        question.incorrect_answers.push({ correct_answer: question.correct_answer })
                        const options = question.incorrect_answers
                            .map(value => ({ value, sort: Math.random() }))
                            .sort((a, b) => a.sort - b.sort)
                            .map(({ value }) => value)
                        return (
                            <>
                                <div className='question'>
                                    <h3 className='que-index sm-h'>Question {index+1}</h3>
                                    <h2 className='md-h'>{question.question}</h2>
                                    <div className='que-options flex-wrap'>
                                        {options.map(answer => (

                                            typeof answer === "object" ?
                                                <button className="btn-outline-secondary btn outline-btn option-btn write-option">{answer['correct_answer']}</button> :
                                                <button className="btn-outline-secondary btn outline-btn option-btn">{answer}</button>

                                        ))}

                                    </div>
                                </div>
                            </>
                        )
                    })
                }
                <Link to="/result">
                    <button class="btn-success btn que-submit-btn">Submit</button>
                </Link>
            </div>
        </>
    )
}

export default Questions