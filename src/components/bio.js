/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

/** @jsx jsx */
import { jsx, Styled, Box } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
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
    <Box py={2}>
      <Box
        p={2}
        sx={{
          borderStyle: "solid",
          borderWidth: 0,
          borderColor: "muted",
          borderRadius: 2,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Box p={2} sx={{ display: "flex", flex: "0 0 76px", minWidth: 76 }}>
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={author.name}
            sx={{ minWidth: 60, borderRadius: 1 }}
          />
        </Box>
        <Box p={2} sx={{ flex: "1 1 300px" }}>
          <Styled.p sx={{ p: 0 }}>
            I am a {author.summary}
            {` `}
            <Styled.a href={`https://twitter.com/${social.twitter}`}>
              Find me on Twitter →
            </Styled.a>
          </Styled.p>
        </Box>
      </Box>
    </Box>
  )
}

export default Bio
