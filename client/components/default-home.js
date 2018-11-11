import React, { Component } from 'react'
import {Link} from 'react-router-dom'

const DefaultHome = () => {
  return (
    <div className="container">
      <div className="row center top-margin">
        <div className="col s12 center">
          <h2 className="primary-text-color">
            Generate Quote Below
         </h2>
       </div>
      </div>
      <div className="row center">
        <button type="submit" className="btn button-color">Inspiration</button>
        <button type="submit" className="btn button-color">Humour</button>
        <button type="submit" className="btn button-color">Religion</button>
      </div>
      <div className="row center">
        <div className="quote-display-background quote-box-shape">
          <h3 className="quote-text-color quote-box-margin">
            Find your quote!
          </h3>
        </div>
      </div>
      <div className="row center">
        {/* <div className="col s6"> */}
          <button type="submit" className="btn button-color">Send to all your friends</button>
        {/* </div> */}
        {/* <div className="col s6"> */}
          <Link to="contacts">
            <button type="submit" className="btn button-color">Choose which friends to    send too
            </button>
          </Link>
        {/* </div> */}
      </div>
    </div>  
  )
}

export default DefaultHome