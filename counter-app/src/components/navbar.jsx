import React, { Component } from "react"

class NavBar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
        </div>
      </nav>
    )
  }
}

export default NavBar
