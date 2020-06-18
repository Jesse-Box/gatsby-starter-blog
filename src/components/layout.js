/** @jsx jsx */
import { jsx, Styled, Container } from "theme-ui"

import Navigation from "./navigation"
import Bio from "./bio"

const Layout = ({ location, title, children }) => {
  return (
    <Styled.root>
      <Navigation>{title}</Navigation>
      <main>
        <Container px={2} py={3} sx={{ maxWidth: [0, 1, 2] }}>
          {children}
        </Container>
      </main>
      <footer>
        <Container px={2} pb={4} sx={{ maxWidth: [0, 1, 2] }}>
          <Bio />
        </Container>
      </footer>
    </Styled.root>
  )
}

export default Layout
