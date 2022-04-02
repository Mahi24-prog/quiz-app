import React from 'react'

const Rule = () => {
  return (
    <>
     
     <div className='rule-container'>
         <h3 className='md-h center-text'>Rules</h3>
         <ol className='rule-list'>
             <li className='rule-list-item lg-text'>There will be 5 questios each carring 5 points.</li>
             <li className='rule-list-item lg-text'>No negative marking.</li>
             <li className='rule-list-item lg-text'>Time limit will be 10mins</li>
             <li className='rule-list-item lg-text'>All the question are compulsary</li>
             <li className='rule-list-item lg-text'>All questions will be Mcq based so only one of them will be correct.</li>
             <li className='rule-list-item lg-text'>There is no option to attempt previous question.</li>
             <li className='rule-list-item lg-text'>Submit button will be enabled once you complete all the questions.</li>
         </ol>
     </div>
    </>
  )
}

export default Rule