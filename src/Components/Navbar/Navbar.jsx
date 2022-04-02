import React from 'react'
import EventNoteIcon from '@material-ui/icons/EventNote';
import GitHubIcon from '@material-ui/icons/GitHub';

const Navbar = () => {
  return (
    <>
      <nav className='navbar flex-wrap'>
          <div className='navbar-left d-flex'>
            <img src="/images/brand-icon.png" className='brang-icon'/>
            <h1 className='brand-name lg-h'>Jackpot Quiz</h1>
          </div>
          <div className='navbar-right flex-wrap'>
             <div className='navbar-icon'>
                <EventNoteIcon style={{fontSize:"3rem"}}/>
             </div>
             <div className='navbar-icon'>
                <GitHubIcon style={{fontSize:"3rem"}}/>
             </div>
          </div>
      </nav>
    </>
  )
}

export default Navbar