import { profile } from '../data/site'

const links = [
  ['incidents', 'Work'],
  ['changelog', 'Changelog'],
  ['hire', 'Freelance'],
  ['notes', 'Notes'],
  ['contact', 'Contact'],
]

function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a href="#top" className="wordmark">
          <span className="dot" aria-hidden="true"></span>
          {profile.firstName.toLowerCase()}<span className="muted">.dev</span>
        </a>
        <nav aria-label="Main">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
