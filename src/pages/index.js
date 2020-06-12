import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';

import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import { getUser, isLoggedIn, logout } from '../services/auth'


import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'
import pic11 from '../assets/images/pic11.jpg'



class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        {/* <Status /> */}
        <Helmet
          title="Gatsby Starter - Forty"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        ></Helmet>

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>About Us</h3>
                <p>Who we are and why we do.</p>
              </header>
              <Link to="/about" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>Sign Up</h3>
                <p>Recieve free informational PDF.</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3>In the Works</h3>
                <p>Whats coming in the next months</p>
              </header>
              <Link to="/coming" className="link primary"></Link>
            </article>
            {/* <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Ipsum</h3>
                                <p>Nisl sed aliquam</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Consequat</h3>
                                <p>Ipsum dolor sit amet</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Etiam</h3>
                                <p>Feugiat amet tempus</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article> */}
            <ul className="actions">
              <h1>Hello {isLoggedIn() ? getUser().name : 'world'}!</h1>
              <p>
                {isLoggedIn() ? (
                  <>
                    You are logged in, so check your{' '}
                    <Link to="/app/profile">profile</Link>
                  </>
                ) : (
                  <>
                    You should <Link to="/app/login">log in</Link> to see
                    restricted content
                  </>
                )}
              </p>
              <li>
                <Link to="/landing" className="button next">
                  Get Started
                </Link>
              </li>
            </ul>
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">{/* <h2>Contact Us</h2> */}</header>
              <p></p>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
