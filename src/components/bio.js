/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

/** @jsx jsx */
import { jsx, Styled, Container } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"
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
            linkedin
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <Container
      p={3}
      sx={{
        borderStyle: "solid",
        borderWidth: 0,
        borderColor: "muted",
        borderRadius: 2,
      }}
    >
      <Container
        p={2}
        sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}
      >
        <Container
          p={2}
          sx={{ display: "flex", flex: "0 0 76px", minWidth: 76 }}
        >
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={author.name}
            sx={{ minWidth: 60, borderRadius: 1 }}
          />
        </Container>
        <Container p={2} sx={{ flex: "1 1 300px" }}>
          <Styled.p sx={{ p: 0 }}>
            {author.summary}
            {` `} Find me on {` `}
            <Styled.a
              as={Link}
              title="Twitter Profile"
              href={`https://twitter.com/${social.twitter}`}
            >
              Twitter
            </Styled.a>
            {` `}
            or
            {` `}
            <Styled.a
              as={Link}
              title="LinkedIn Profile"
              href={`https://linkedin.com/${social.linkedin}`}
            >
              LinkedIn
            </Styled.a>
            .
          </Styled.p>
        </Container>
      </Container>
    </Container>
  )
}

export default Bio
