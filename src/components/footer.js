/** @jsx jsx */
import { jsx, Flex, Container } from "theme-ui"
import LinkNav from "./link-nav"

const Footer = () => {
  return (
    <footer
      sx={{
        backgroundColor: "background",
        width: "100%",
        paddingBottom: 5,
      }}
    >
      <Container sx={{ maxWidth: [0, 1] }}>
        <Flex sx={{ alignItems: "center", padding: 2 }}>
          <LinkNav title="Twitter" href="https://twitter.com/JesseThomasBox">
            Twitter
          </LinkNav>
          <LinkNav
            title="LinkedIn"
            href="https://www.linkedin.com/in/jesse-box-835346b7/"
          >
            LinkedIn
          </LinkNav>
        </Flex>
      </Container>
    </footer>
  )
}

export default Footer
