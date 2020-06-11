/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      sx={{
        display: "flex",
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        sx={{ marginBottom: 0, minWidth: 50, borderRadius: "100%" }}
      />
      <Styled.p>
        Written by <strong>{author.name}</strong> {author.summary}
        {` `}
        <Styled.a href={`https://twitter.com/${social.twitter}`}>
          You should follow him on Twitter
        </Styled.a>
      </Styled.p>
    </div>
  )
}

export default Bio
