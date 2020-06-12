import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { getUser, isLoggedIn, logout } from '../services/auth'

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={props.onToggleMenu} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/about">
            About Us
          </Link>
        </li>
        {/* <li>
          <Link onClick={props.onToggleMenu} to="/generic">
            In the Works
          </Link>
        </li> */}
        {/* <li><Link onClick={props.onToggleMenu} to="/elements">Sign Up</Link></li> */}
      </ul>
      <ul className="actions vertical">
        {/* <li>
          <a href="#" className="button special fit">
            Sign Up
          </a>
        </li>
        <li>
          <a href="/app/profile" className="button fit">
            Log In
          </a>
        </li> */}

        <p>
        {isLoggedIn() ? (
          <>
          <li>
            <a href="/app/profile" className="button fit">
              Profile
            </a>
          </li>
          </>
        ) : (
          <>
          <li>
            <a href="/app/login" className="button fit">
              Sign Up/Log In
            </a>
          </li>
          </>
        )}
      </p>
      
      <div
      style={{
        display: "flex",
        flex: "1",
        justifyContent: "space-between",
        borderBottom: "1px solid #d1c1e0",
      }}
    >
      {/* <span>{greetingMessage}</span> */}
      <nav>
        <Link to="/">Home</Link>
        {` `}
        <Link to="/app/profile">Profile</Link>
        {` `}
        {isLoggedIn() ? (
          <a
            href="/"
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/app/login`))
            }}
          >
            Logout
          </a>
        ) : null}
      </nav>
    </div>

      </ul>
    </div>
    <a className="close" onClick={props.onToggleMenu} href="javascript:;">
      Close
    </a>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
