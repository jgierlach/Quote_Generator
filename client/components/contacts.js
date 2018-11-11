import React, { Component } from 'react'

// This component will be upgraded to a container
// It will be connected to the redux store
// And will be responsible for rendering a users list of contacts that they can send quotes too
// From this component a user should be able to update, delete, and add to their list of contacts
const contacts = () => {
    return (
      <div className="center">
        <h1>You have no contacts yet :(</h1>
      </div>
    )
}

export default contacts