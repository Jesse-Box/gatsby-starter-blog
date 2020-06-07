/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <Styled.h1>
        <Styled.a as={Link} activeClassName="active" to={`/`}>
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
    <div>
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <Styled.a href="https://www.gatsbyjs.org">Gatsby</Styled.a>
      </footer>
    </div>
  )
}

export default Layout
