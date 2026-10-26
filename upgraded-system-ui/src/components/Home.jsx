import { useState } from 'react'
import Uptime from './Uptime'
import SystemMap from './SystemMap'
import Icon from './Icons'
import { NoteList } from './Notes'
import { daysSince } from '../lib/uptime'
import { posts } from '../lib/posts'
import { designs } from '../lib/designs'
import {
  profile, incidents, changelog, projects, services, steps, stack, quotes, offCall,
} from '../data/site'

function Section({ id, label, title, intro, children }) {
  return (
    <section id={id} className="section">
      <div className="wrap">
        <header className="section-head">
          <p className="label mono">{label}</p>
          <h2>{title}</h2>
          {intro && <p className="intro">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}

function Hero() {
  const days = daysSince(profile.firstDayInProduction).toLocaleString('en-CA')
  return (
    <section id="top" className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="status mono">
              <span className="pulse" aria-hidden="true"></span>
              Open to roles and freelance · {profile.location}
            </p>
            <h1>I keep the backends you never think about running.</h1>
            <p className="lede">
              {profile.firstName} · Java backend engineer and graphic designer. Eight years on
              systems millions of people use every day.
            </p>
            <div className="actions">
              <a className="btn primary" href="#contact">Start a project <Icon name="arrow" size={16} /></a>
              <a className="btn" href="#incidents">See my work</a>
              {profile.resumeUrl && <a className="btn ghost" href={profile.resumeUrl}>Resume</a>}
            </div>
          </div>
          <SystemMap />
        </div>
        <Uptime />
        <p className="since mono">{days} days since my first production release</p>
      </div>
    </section>
  )
}

function Incidents() {
  return (
    <Section id="incidents" label="incident reports" title="Problems I've solved">
      <div className="incidents">
        {incidents.map((inc) => (
          <article key={inc.id} className="incident">
            <div className="incident-top">
              <span className="icon-tile"><Icon name={inc.icon} size={22} /></span>
              <span className="resolved mono">resolved · {inc.when}</span>
            </div>
            <p className="metric">{inc.metric}</p>
            <h3>{inc.title}</h3>
            <details>
              <summary className="mono">read the report</summary>
              <dl>
                <dt className="mono">impact</dt><dd>{inc.impact}</dd>
                <dt className="mono">action</dt><dd>{inc.action}</dd>
                <dt className="mono">result</dt><dd className="result">{inc.result}</dd>
              </dl>
            </details>
          </article>
        ))}
      </div>
    </Section>
  )
}

function Changelog() {
  return (
    <Section id="changelog" label="changelog" title="Releases so far">
      <ol className="changelog">
        {changelog.map((c) => (
          <li key={c.version}>
            <span className="tag mono">{c.version}</span>
            <div className="entry">
              <h3>{c.title}</h3>
              <p>{c.note}</p>
            </div>
            <span className="when mono">{c.when}</span>
          </li>
        ))}
      </ol>
    </Section>
  )
}

function Projects() {
  return (
    <Section id="projects" label="side projects" title="Built on my own time">
      <div className="projects">
        {projects.map((p) => (
          <article key={p.name} className="project">
            <h3>{p.name}</h3>
            <p>{p.summary}</p>
            <ul className="pills">{p.stack.map((t) => <li key={t} className="mono">{t}</li>)}</ul>
            {(p.code || p.demo) && (
              <p className="links">
                {p.code && <a href={p.code} target="_blank" rel="noreferrer"><Icon name="github" size={16} /> Code</a>}
                {p.demo && <a href={p.demo} target="_blank" rel="noreferrer"><Icon name="arrow" size={16} /> Live</a>}
              </p>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}

function Design() {
  const slots = designs.length ? designs : [1, 2, 3, 4].map((n) => ({ key: `slot-${n}`, url: '', name: '' }))
  return (
    <Section id="design" label="graphic design" title="Logos and marks">
      <div className="gallery">
        {slots.map((d) => (
          <figure key={d.key} className={`logo-tile ${d.url ? '' : 'empty'}`}>
            {d.url ? (
              <img src={d.url} alt={`${d.name} logo`} loading="lazy" />
            ) : (
              <span className="slot"><Icon name="pen" size={28} /><span className="mono">your logo here</span></span>
            )}
            {d.name && <figcaption className="mono">{d.name}</figcaption>}
          </figure>
        ))}
      </div>
    </Section>
  )
}

function Hire() {
  return (
    <Section id="hire" label="freelance" title="Hire me for a project">
      <div className="endpoints">
        {services.map((s) => (
          <article key={s.path} className="endpoint">
            <span className="icon-tile"><Icon name={s.icon} size={22} /></span>
            <p className="route mono"><span className="method">{s.method}</span>{s.path}</p>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </article>
        ))}
      </div>
      <ol className="steps">
        {steps.map((s) => (
          <li key={s.text}>
            <span className="icon-tile small"><Icon name={s.icon} size={18} /></span>
            {s.text}
          </li>
        ))}
      </ol>
    </Section>
  )
}

function Stack() {
  return (
    <Section id="stack" label="dependencies" title="What I work with">
      <div className="stack">
        {stack.map((g) => (
          <div key={g.group} className="stack-group">
            <p className="stack-head mono"><Icon name={g.icon} size={18} />{g.group}</p>
            <ul className="pills">{g.items.map((t) => <li key={t} className="mono">{t}</li>)}</ul>
          </div>
        ))}
      </div>
      <div className="quotes">
        {quotes.map((q) => (
          <figure key={q.who}>
            <blockquote>{q.text}</blockquote>
            <figcaption><strong>{q.who}</strong> · {q.role}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}

function OffCall() {
  return (
    <Section id="off-call" label="off-call" title="When the pager is quiet">
      <ul className="offcall">
        {offCall.map((o) => <li key={o}><Icon name="coffee" size={18} />{o}</li>)}
      </ul>
      {posts.length > 0 && (
        <>
          <h3 className="sub"><Icon name="note" size={20} /> Latest notes</h3>
          <NoteList items={posts.slice(0, 3)} />
          <p><a className="more" href="#notes">All notes →</a></p>
        </>
      )}
    </Section>
  )
}

function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }
  return (
    <Section id="contact" label="open a ticket" title="Let's talk" intro="Hiring, or have a system that needs help? I reply within a day.">
      <div className="contact">
        {profile.email ? (
          <p className="email">
            <Icon name="mail" size={28} />
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <button type="button" className="btn small" onClick={copy}>{copied ? 'Copied' : 'Copy'}</button>
          </p>
        ) : (
          <p className="email placeholder"><Icon name="mail" size={28} />[your email goes here]</p>
        )}
        <p className="elsewhere">
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" /> LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer"><Icon name="github" /> GitHub</a>
        </p>
      </div>
    </Section>
  )
}

function Home() {
  return (
    <>
      <Hero />
      <Incidents />
      <Changelog />
      <Projects />
      <Design />
      <Hire />
      <Stack />
      <OffCall />
      <Contact />
    </>
  )
}

export default Home
