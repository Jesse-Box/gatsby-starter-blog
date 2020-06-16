/** @jsx jsx */
import { jsx, Styled, Box } from "theme-ui"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header sx={{ py: 3 }}>
          <Styled.h1>{post.frontmatter.title}</Styled.h1>
          <Styled.h6>{post.frontmatter.date}</Styled.h6>
        </header>
        <MDXRenderer>{post.body}</MDXRenderer>
        <footer sx={{ py: 2 }}>
          <Bio />
        </footer>
      </article>

      <nav>
        <Box py={2}>
          <Styled.ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
              margin: 0,
            }}
          >
            <Styled.li sx={{ width: "50%" }}>
              {previous && (
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "nowrap",
                    flexFlow: "column",
                  }}
                >
                  <Styled.h6>Previous</Styled.h6>
                  <Styled.a as={Link} to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Styled.a>
                </Box>
              )}
            </Styled.li>
            <Styled.li
              sx={{
                width: "50%",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {next && (
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "nowrap",
                    flexFlow: "column",
                  }}
                >
                  <Styled.h6 sx={{ textAlign: "right" }}>Next</Styled.h6>
                  <Styled.a
                    sx={{ textAlign: "right" }}
                    as={Link}
                    to={next.fields.slug}
                    rel="next"
                  >
                    {next.frontmatter.title} →
                  </Styled.a>
                </Box>
              )}
            </Styled.li>
          </Styled.ul>
        </Box>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
