import React from 'react'
import EventNoteIcon from '@material-ui/icons/EventNote';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className='navbar flex-wrap'>
        <div className='navbar-left d-flex'>
          <img src="/images/brand-icon.png" className='brang-icon' />
          <Link to="/">
            <h1 className='brand-name lg-h'>Jackpot Quiz</h1>
          </Link>
        </div>
        <div className='navbar-right flex-wrap'>
          <div className='navbar-icon'>
            <Link to="/rule">
              <EventNoteIcon style={{ fontSize: "3rem" }} />
            </Link>
          </div>
          <div className='navbar-icon'>
              <GitHubIcon style={{ fontSize: "3rem" }} />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar