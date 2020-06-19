/** @jsx jsx */
import { jsx, Styled, Box, Container } from "theme-ui"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata.title
  const featuredImageFluid =
    post.frontmatter.featuredImage.childImageSharp.fluid
  const { previous, next } = pageContext
  const tags = post.frontmatter.tags

  const listTags = tags.map(tag => (
    <Styled.li key={tag.toString} sx={{ display: "inline" }}>
      <Styled.h6 sx={{ display: "inline", pr: 3 }}>{tag}</Styled.h6>
    </Styled.li>
  ))

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <Container
          sx={{
            p: [3, 4, 4],
            borderStyle: "solid",
            borderWidth: 0,
            borderColor: "background",
            borderRadius: 2,
          }}
        >
          <header>
            <Box pt={2}>
              <Styled.ul sx={{ listStyleType: "none", p: 0, m: 0 }}>
                {listTags}
              </Styled.ul>
              <Styled.h1>{post.frontmatter.title}</Styled.h1>
              <Styled.h6 sx={{ py: 1 }}>{post.frontmatter.date}</Styled.h6>
              <Box py={3}>
                <Image fluid={featuredImageFluid}></Image>
              </Box>
            </Box>
          </header>
          <MDXRenderer>{post.body}</MDXRenderer>
        </Container>
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
        tags
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
