/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import ThemeToggle from "./theme-toggle"
import { useStaticQuery, graphql } from "gatsby"
import LinkNav from "./link-nav"

const Navigation = props => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <nav
      sx={{
        backgroundColor: "background",
        borderBottomColor: "muted",
        borderBottomStyle: "solid",
        borderBottomWidth: 0,
        position: "fixed",
        width: "100%",
      }}
    >
      <Container
        p={2}
        sx={{
          display: "flex",
          justifyContent: "spaceBetween",
          alignItems: "center",
          maxWidth: [0, 1],
        }}
      >
        <LinkNav
          sx={{ variant: "link.nav" }}
          title="Home"
          to="/"
          activeClassName="active"
        >
          {data.site.siteMetadata.title}
        </LinkNav>
        <ThemeToggle />
      </Container>
    </nav>
  )
}

export default Navigation
