import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Generic = props => (
  <Layout>
    <Helmet>
      <title>About Us</title>
      <meta name="description" content="Generic Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>About Us</h1>
          </header>
          <span className="image main">
            <img src={pic11} alt="" />
          </span>
          <p>
            Iron Plated Profiles is dedicated to helping individuals re-entering
            the job market find workplaces that they can grow and succeed in. We
            work to bring together resources and information from multiple
            sources to create simple learning plans, effective tools, and
            valuable resources. We help people prepare professional profiles to
            aid them in reaching their career goals!
          </p>
          <h3>What we want to become</h3>
          <ul>
            <h4>
              Our goal is to provide a variety of tools targeted at several
              important key areas. Some of these areas include:
            </h4>

            <li>Career Planning</li>
            <li>Job Search Techniques</li>
            <li>Resume Writing</li>
            <li>Interviewing</li>
            <li>Networking</li>
            <li>Personal Branding</li>
            <li>Communication</li>
            <li>Personal Growth and Education</li>
          </ul>
          <h4>
            We are working to utilize some of the following tools to help
            achieve these goals:
          </h4>
          <ul>
            <li>Booklets and Instructional Guides</li>
            <li>Resume and Document Creation Wizard</li>
            <li>Job Club Planning Kit</li>
            <li>Employment Blog</li>
            <li>Iron Plated Podcast</li>
            <li>Instructional Videos</li>
            <li>Workshops and Networking Events</li>
          </ul>
          <p>
            It is with these and other initiatives that we hope to help those
            looking to grow through their careers to reach their full potential.
          </p>
          <h4>Who we want to help</h4>
          <p>
            If you are seeking employment for the first time or after an
            extended absence from the workforce, we would like to assist you in
            getting some new opportunities. If you are seeking to further your
            career, we hope to aid you in finding the next value-adding step in
            your career!
          </p>
          <h4>What We Offer</h4>
          We have begun to aid individuals using the following tools:
          <li>Our 6 Step Plan to finding a fulfilling career</li>
          <li>Helping individuals to create resumes</li>
          <li>Allowing one-on-one aid to client job searches</li>
        </div>
      </section>
    </div>
  </Layout>
)

export default Generic
