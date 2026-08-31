import { Link } from 'react-router-dom'

export function Nav() {
  return (
    <header className="site-nav">
      <div className="container site-nav__inner">
        <Link to="/" className="site-nav__logo">
          Sophie Messer
        </Link>
        <nav>
          <ul className="site-nav__links">
            <li>
              <Link to="/projects">All Projects</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <a href="mailto:sophieolm@gmail.com">Connect</a>
            </li>
            <li>
              <a href="/resume.pdf" target="_blank" rel="noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
