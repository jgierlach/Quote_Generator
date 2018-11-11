import React from 'react'
import {withRouter, Route, Switch, Redirect, BrowserRouter as Router, NavLink, Link} from 'react-router-dom'

const footer = () => {
    return  (
        <footer id="footer" className="page-footer nav-color">
        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <p className="left">© 2018 Quote Generator</p>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default footer