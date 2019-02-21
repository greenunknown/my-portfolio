import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Welcome!</h1>
    <p>A software engineer's portfolio website built with Gatsby.</p>
    <h2>About me</h2>
    <p>Now go build something great.</p>
    <h2>Works</h2>
    <ul>
      <li>Setting up a Harbor Docker Registry at Daimler Trucks North America</li>
    </ul>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
