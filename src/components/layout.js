/** @jsx jsx */
import { jsx, Styled, Container } from "theme-ui"

import Navigation from "./navigation"
import Footer from "./footer"

const Layout = ({ location, title, children }) => {
  return (
    <Styled.root>
      <Navigation>{title}</Navigation>
      <Container px={3} py={5} sx={{ maxWidth: [0, 1] }}>
        <main sx={{ paddingX: 2 }}>{children}</main>
      </Container>
      <Footer />
    </Styled.root>
  )
}

export default Layout
