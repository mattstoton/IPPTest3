import React, {Component} from 'react';
import { Router } from '@reach/router';
import Layout from '../components/layout';
import PrivateRoute from '../components/privateRoute';
import Status from '../components/Status';
import Profile from '../components/profile';
import Login from '../components/login';

// const App = () => (
//   <Layout>
//     <Router>
//       <Profile path="/app/profile" />
//       <Login path="/app/login" />
//     </Router>
//   </Layout>
// )

// componentDidMount() {
//   const user = localStorage.getItem("currentOpenSaucedUser");
//   if (user) {
//     this.setState({user: JSON.parse(user)});
//   } else {
//     loginUser();
//   }
//   netlifyIdentity.on("login", (user) => this.setState({user}, loginUser()));
//   netlifyIdentity.on("logout", (user) => this.setState({user: null}, logoutUser()));
// }

class App extends Component {
  state = { user: null }
  

  render() {
    return (
      <Layout>
        <Router>
          <Profile path="/app/profile" component={Profile} />
          <Login path="/app/login" />
        </Router>
      </Layout>
    )
  }
}
export default App
