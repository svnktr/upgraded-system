import { profile } from '../data/site'

const links = [
  ['incidents', 'Work'],
  ['design', 'Design'],
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
          <span>{profile.firstName.toLowerCase()}<span className="muted">.dev</span></span>
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
