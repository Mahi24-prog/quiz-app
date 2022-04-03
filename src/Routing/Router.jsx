import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../Pages/Home/Home';
import QuestionsPage from "../Pages/Questions/QuestionsPage"
import ResultPage from "../Pages/Result/ResultPage"
import RulePage from "../Pages/Rule/RulePage"

const Router = () => {
  return (
    <>
        <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/questions' element={<QuestionsPage/>}></Route>
            <Route exact path='/result' element={<ResultPage/>}></Route>
            <Route exact path='/rule' element={<RulePage/>}></Route>
        </Routes>
    </>
  )
}

export default Router