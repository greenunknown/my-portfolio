import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import harbor1 from "../images/harbor1.png"
import harbor2 from "../images/harbor2.png"
import harbor3 from "../images/harbor3.png"
import lscan1 from "../images/lscan1.jpg"
import lscan2 from "../images/lscan2.jpg"
import lscan3 from "../images/lscan3.jpg"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Link to="/page-2/">Go to page 2</Link>
    <style>
      
    </style>
    <h1>Welcome!</h1>
    <p>A software engineer's portfolio website built with Gatsby.</p>
    <h2>About me</h2>
    <p>I build software, play music, and draw. I am interested in anything graphics and web so let me know what cool things you're building out there!</p>
    <h2>Selected Works</h2>
    <ul>
      <li>
        <p>Setting up a Harbor Docker Registry at Daimler Trucks North America</p>
        {/*
        <div className="sidebyside" style={{ maxWidth: `400px`, marginBottom: `1.45rem` }}>
          <img className="sidebyside" src="https://raw.githubusercontent.com/goharbor/harbor/master/docs/img/harbor_logo.png" alt="harbor_logo.png"></img>
        </div>
        */}
        <div className="sidebyside" style={{ maxWidth: `400px`, marginBottom: `1.45rem` }}>
          <img src={harbor2} alt="rbac.png"></img>
        </div>
        <div className="sidebyside" style={{ maxWidth: `400px`, marginBottom: `1.45rem` }}>
          <img src={harbor3} alt="new_project_log.png"></img>
        </div>
      </li>
      <li>
        <div>
          <a href="https://github.com/bgoldbeck/lscan">LScan CS Capstone Project</a>
        </div>
        <div className="sidebyside" style={{ maxWidth: `400px`, marginBottom: `1.45rem` }}>
          <img src={lscan1} alt="lscan1.jpg"></img>
        </div>
        <div className="sidebyside" style={{ maxWidth: `400px`, marginBottom: `1.45rem` }}>
          <img src={lscan2} alt="lscan2.jgp"></img>
        </div>
        {/*
          <img src={lscan3} alt="lscan3.jgp"></img>
        </div>
        */}
      </li>
      <li>
        CS 447: Computer Graphics Amusement Park Project
      </li>
    </ul>
    {/*
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    */}
  </Layout>
)

export default IndexPage
