// import React from 'react'
// import PropTypes from 'prop-types'
// import { Link } from 'gatsby'

// const Menu = (props) => (
//     <nav id="menu">
//         <div className="inner">
//             <ul className="links">
//                 <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
//                 <li><Link onClick={props.onToggleMenu} to="/landing">About Us</Link></li>
//                 <li><Link onClick={props.onToggleMenu} to="/generic">In the Works</Link></li>
//                 {/* <li><Link onClick={props.onToggleMenu} to="/elements">Sign Up</Link></li> */}
//             </ul>
//             <ul className="actions vertical">
//                 <li><a href="#" className="button special fit">Sign Up</a></li>
//                 <li><a href="#" className="button fit">Log In</a></li>
//                 <Link to="/app/profile">Go to your profile</Link>
                
//             </ul>
//         </div>
//         <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
//     </nav>
// )

// Menu.propTypes = {
//     onToggleMenu: PropTypes.func
// }

// export default Menu
import React from "react"
import { useState} from "react"
import { Link, navigate } from "@reach/router"
import { getUser, isLoggedIn, logout } from "../services/auth"
import firebase from "gatsby-plugin-firebase"

export default () => {
  const [firebase, setFirebase] = useState();

  React.useEffect(() => {
    firebase
      .database()
      .ref("/user")
      .once("value")
      .then(snapshot => {
        setUser(snapshot.val())
      })
  }, [])

  let details;
  if (!isLoggedIn()) {
    details = (
      <p className="text-right px-5">
        <Link to="/app/login"><u>Log in</u></Link>
      </p>
    )
  } else {
    const { displayName, email } = getUser()
    details = (
      <p className="text-right px-5">
        Logged in as {displayName} ({email}
        )!
        {` `}
        <a href="/" onClick={event => { event.preventDefault(); logout(firebase).then(() => navigate(`/app/login`)) }}>
          <u>log out</u>
        </a>
      </p>
    )
  }

  return <div>{details}</div>
}
