/** @jsx jsx */
import { jsx, Styled, Container } from "theme-ui"

import Navigation from "./navigation"
import Footer from "./footer"

const Layout = ({ location, title, children }) => {
  return (
    <Styled.root>
      <Navigation>{title}</Navigation>
      <main>
        <Container px={2} py={5} sx={{ maxWidth: [0, 1, 2] }}>
          {children}
        </Container>
      </main>
      <Footer />
    </Styled.root>
  )
}

export default Layout
