/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <Styled.h1>Not Found</Styled.h1>
      <Styled.p>
        You just hit a route that doesn&#39;t exist... the sadness.
      </Styled.p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
