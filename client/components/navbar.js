import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <nav className="nav-color">
      {isLoggedIn ? (
        <div className="nav-wrapper primary-text-color">
          {/* The navbar will show these links after you log in */}
          {/* Beginning of desktop navbar */}
            {/* Hamburger navbar icon */}
            <a className="sidenav-trigger primary-text-color" href="#" data-target="mobile-links">
              <i className="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down primary-text-color">
              <li>
               {/* Link to home component */}  
                <NavLink className="primary-text-color" to='/home'
                  activestyle={{
                    color: '#EF4907'
                   }}>Home
                </NavLink>
              </li>
              <li>
               {/* Link to contact component */}  
                <NavLink className="primary-text-color" to='/contacts'
                  activestyle={{
                    color: '#EF4907'
                   }}>Contact
                </NavLink>
              </li> 
              <li>
               {/* Link to logout of app */}  
                <a href="#" className="primary-text-color" onClick={handleClick}
                  activestyle={{
                    color: '#EF4907'
                   }}>Logout
                </a> 
              </li>
            </ul>
            {/* End of desktop navbar beginning of mobile navbar*/}
            <ul id="mobile-links" className="sidenav">
              <li>
                {/* Mobile Link to home component */}
                <NavLink className="primary-text-color" to='/home'
                  activestyle={{
                    color: '#EF4907'
                   }}>Home
                </NavLink>
              </li>
              <li>
                <a href="#" className="primary-text-color" onClick={handleClick} 
                  activestyle={{
                    color: '#EF4907'
                   }}>Logout
                </a>
              </li> 
            </ul>
        </div>
      ) : (
        <div className="nav-wrapper primary-text-color">
          {/* The navbar will show these links before you log in */}
          {/* The navbar will show these links after you log in */}
          {/* Beginning of desktop navbar */}
            {/* Hamburger navbar icon */}
            <a className="sidenav-trigger primary-text-color" href="#" data-target="mobile-links">
              <i className="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
             <li>
               {/* Link to home component */}  
                <NavLink className="primary-text-color" to='/home'
                  activestyle={{
                    color: '#EF4907'
                   }}>Home
                </NavLink>
              </li> 
              <li>
               {/* Link to login component */}  
                <NavLink className="primary-text-color" to='/login'
                  activestyle={{
                    color: '#EF4907'
                   }}>Login
                </NavLink>
              </li> 
              <li>
              {/* Link to sign up component */}
              <NavLink className="primary-text-color" to='/signup'
                  activestyle={{
                    color: '#EF4907'
                   }}>Sign Up
                </NavLink>  
              </li>
            </ul>
            {/* End of desktop navbar beginning of mobile navbar*/}
            <ul id="mobile-links" className="sidenav">
              <li>
                {/* Link to login component */}  
                <NavLink className="primary-text-color" to='/login'
                  activestyle={{
                    color: '#EF4907'
                   }}>Login
                </NavLink>
              </li>
              <li>
              <NavLink className="primary-text-color" to='/signup'
                  activestyle={{
                    color: '#EF4907'
                   }}>Sign Up
              </NavLink> 
              </li> 
            </ul>
        </div>
      )}
    </nav>
    {/* <hr /> */}
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
