// import React from "react"
// import { navigate } from "gatsby"
// import { handleLogin, isLoggedIn } from "../services/auth"

// class Login extends React.Component {
//   state = {
//     username: ``,
//     password: ``,
//   }

//   handleUpdate = event => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     })
//   }

//   handleSubmit = event => {
//     event.preventDefault()
//     handleLogin(this.state)
//   }

//   render() {
//     if (isLoggedIn()) {
//       navigate(`/app/profile`)
//     }

//     return (
//       <>
//         <h1>Log in</h1>
//         <form
//           method="post"
//           onSubmit={event => {
//             this.handleSubmit(event)
//             navigate(`/app/profile`)
//           }}
//         >
//           <label>
//             Username
//             <input type="text" name="username" onChange={this.handleUpdate} />
//           </label>
//           <label>
//             Password
//             <input
//               type="password"
//               name="password"
//               onChange={this.handleUpdate}
//             />
//           </label>
//           <input type="submit" value="Log In" />
//         </form>
//       </>
//     )
//   }
// }

// export default Login

import React from "react"
import { navigate } from '@reach/router';
import Layout from '../components/layout'
import { useState} from "react"
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { setUser, isLoggedIn } from "../services/auth"
import firebase from "gatsby-plugin-firebase"

const Login = () => {
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

  if (isLoggedIn()) {
    navigate(`/app/profile`)
  }

  function getUiConfig(auth) {
    return {
      signInFlow: 'popup',
      signInOptions: [
        auth.GoogleAuthProvider.PROVIDER_ID,
        auth.EmailAuthProvider.PROVIDER_ID
      ],
      // signInSuccessUrl: '/app/profile',
      callbacks: {
        signInSuccessWithAuthResult: (result) => {
          setUser(result.user);
          navigate('/app/profile');
        }
      }
    };
  }

  return (
    <View title="Log In">
      <p>Please sign-in to access to the private route:</p>
      {firebase && <StyledFirebaseAuth uiConfig={getUiConfig(firebase.auth)} firebaseAuth={firebase.auth()}/>}
    </View>
  );

}

export default Login
