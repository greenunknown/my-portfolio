import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Link to="/page-2/">Go to page 2</Link>
    <h1>Welcome!</h1>
    <p>A software engineer's portfolio website built with Gatsby.</p>
    <h2>About me</h2>
    <p>Now go build something great.</p>
    <h2>Selected Works</h2>
    
    <ul>
      <li>
        <p>Setting up a Harbor Docker Registry at Daimler Trucks North America</p>
        <img src="https://raw.githubusercontent.com/goharbor/harbor/master/docs/img/harbor_logo.png" alt="harbor_logo.png"></img>
        <img src="https://raw.githubusercontent.com/goharbor/harbor/master/docs/img/rbac.png" alt="rbac.png"></img>
        <img src="https://raw.githubusercontent.com/goharbor/harbor/master/docs/img/new_project_log.png" alt="new_project_log.png"></img>

      </li>
      <li>
        LScan CS Capstone Project: 
      </li>
      <li>
        CS 447: Computer Graphics Amusement Park Project
      </li>
    </ul>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
