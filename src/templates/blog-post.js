/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
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
        <header>
          <Styled.h1>{post.frontmatter.title}</Styled.h1>
          <Styled.p>{post.frontmatter.date}</Styled.p>
        </header>
        <MDXRenderer>{post.body}</MDXRenderer>
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <Styled.ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <Styled.li>
            {previous && (
              <Styled.a as={Link} to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Styled.a>
            )}
          </Styled.li>
          <Styled.li>
            {next && (
              <Styled.a as={Link} to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Styled.a>
            )}
          </Styled.li>
        </Styled.ul>
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
