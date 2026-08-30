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
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="mailto:sophie@example.com">Connect</a>
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
