import { profile } from '../data/site'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="mono">built from scratch · <a href="https://github.com/svnktr/upgraded-system" target="_blank" rel="noreferrer">source</a></span>
      </div>
    </footer>
  )
}

export default Footer
