import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>About Us</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Generic</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p>Iron Plated Profiles is dedicated to helping individuals seeking employment find workplaces that they can excel in quickly and effectively. We work to bring together resources and information from multiple sources to create simple learning plans, effective tools, and valuable resources. We help people prepare professional profiles to aid them in their search for fulfilling work.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic