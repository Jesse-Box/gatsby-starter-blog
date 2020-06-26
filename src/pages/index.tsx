/** @jsx jsx */
import { jsx, Styled, Container } from "theme-ui"
import { PageProps, Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMdx: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
          featuredImage: {
            childImageSharp: {
              fluid: FluidObject
            }
          }
          tags: []
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <header>
        <Container
          sx={{
            p: [3, 4, 4],
            borderStyle: "solid",
            borderWidth: 0,
            borderColor: "background",
            borderRadius: 2,
          }}
        >
          <Styled.h1>All Posts</Styled.h1>
        </Container>
      </header>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        const tags = node.frontmatter.tags

        const listTags = tags.map(tag => (
          <Styled.li key={tag.toString} sx={{ display: "inline" }}>
            <Styled.h6 sx={{ display: "inline", pr: 3 }}>{tag}</Styled.h6>
          </Styled.li>
        ))

        return (
          <Container>
            <article
              key={node.fields.slug}
              sx={{
                p: [3, 4, 4],
                borderStyle: "solid",
                borderWidth: 0,
                borderColor: "muted",
                borderRadius: 2,
              }}
            >
              <header>
                <Styled.ul
                  sx={{ listStyleType: "none", pt: 2, px: 0, pb: 0, m: 0 }}
                >
                  {listTags}
                </Styled.ul>
                <Styled.h3 sx={{ pt: 2 }}>
                  <Styled.a as={Link} to={node.fields.slug}>
                    {title}
                  </Styled.a>
                </Styled.h3>
              </header>
              <section>
                <Styled.p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
                <Styled.h6>{node.frontmatter.date}</Styled.h6>
                <Container pt={3} pb={3}>
                  <Container
                    sx={{
                      borderRadius: 2,
                      borderStyle: "solid",
                      borderWidth: 0,
                      borderColor: "muted",
                    }}
                  >
                    <Image
                      fluid={
                        node.frontmatter.featuredImage.childImageSharp.fluid
                      }
                    />
                  </Container>
                </Container>
              </section>
            </article>
          </Container>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tags
          }
        }
      }
    }
  }
`
