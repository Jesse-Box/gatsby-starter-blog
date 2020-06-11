/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import { Global, css } from "@emotion/core"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <Styled.h1>
        <Styled.a as={Link} to={`/`}>
          {title}
        </Styled.a>
      </Styled.h1>
    )
  } else {
    header = (
      <Styled.h3>
        <Styled.a as={Link} to={`/`}>
          {title}
        </Styled.a>
      </Styled.h3>
    )
  }
  return (
    <Styled.root>
      <Global
        styles={css`
          @font-face {
            font-family: "Unica77LLWeb-Regular";
            src: url("fonts/Unica77LLWeb-Regular.woff2") format("woff2"),
              url("fonts/Unica77LLWeb-Regular.woff") format("woff");
          }
          @font-face {
            font-family: "Unica77LLWeb-Bold";
            src: url("fonts/Unica77LLWeb-Bold.woff2") format("woff2"),
              url("fonts/Unica77LLWeb-Bold.woff") format("woff");
          }
        `}
      />
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <Styled.a href="https://www.gatsbyjs.org">Gatsby</Styled.a>
      </footer>
    </Styled.root>
  )
}

export default Layout
