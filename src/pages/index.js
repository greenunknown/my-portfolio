import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

import harbor1 from "../images/harbor1.png"
import harbor2 from "../images/harbor2.png"
import harbor3 from "../images/harbor3.png"
import lscan1 from "../images/lscan1.jpg"
import lscan2 from "../images/lscan2.jpg"
import lscan3 from "../images/lscan3.jpg"


export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Brandon Le
        </h1>

        <h1>Welcome!</h1>
        <h2>About me</h2>
        <p>I build software, play music, and draw. I am interested in anything graphics and web so let me know what cool things you're building out there!</p>
        <h2>Selected Works</h2>
        <ul>
          <li>
            <p>Setting up a Harbor Docker Registry at Daimler Trucks North America</p>
            <div className="sidebyside" style={{ maxWidth: `400px`, marginBottom: `1.45rem` }}>
              <img src={harbor1} alt="rbac.png"></img>
            </div>
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
              <img src={lscan2} alt="lscan2.jpg"></img>
            </div>
            <div className="sidebyside" style={{ maxWidth: `400px`, marginBottom: `1.45rem` }}>
              <img src={lscan3} alt="lscan3.jpg"></img>
            </div>
          </li>
          <li>
            CS 447: Computer Graphics Amusement Park Project
          </li>
        </ul>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #bbb;
                  `}
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <h4>Time to read: {node.timeToRead}</h4>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`