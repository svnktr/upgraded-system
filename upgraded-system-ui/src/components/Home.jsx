import { useState } from 'react'
import Uptime from './Uptime'
import { NoteList } from './Notes'
import { daysSince } from '../lib/uptime'
import { posts } from '../lib/posts'
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
        <p className="status mono">
          <span className="pulse" aria-hidden="true"></span>
          Open to senior backend roles and freelance work · {profile.location}
        </p>
        <h1>I keep the backends you never think about running.</h1>
        <p className="lede">
          I'm {profile.firstName}, a {profile.role}. For eight years I built and looked after
          Bell Canada platforms that millions of people use without a second thought. Now I'm
          looking for my next team, and taking on freelance backend projects.
        </p>
        <div className="actions">
          <a className="btn primary" href="#contact">Start a project</a>
          <a className="btn" href="#incidents">Read the incident reports</a>
          {profile.resumeUrl && <a className="btn ghost" href={profile.resumeUrl}>Resume (PDF)</a>}
        </div>
        <Uptime />
        <p className="since mono">{days} days since my first production release.</p>
      </div>
    </section>
  )
}

function Incidents() {
  return (
    <Section
      id="incidents"
      label="incident reports"
      title="What the work actually looked like"
      intro="Job titles say what I was called. These say what I did. Each one is written like a postmortem: impact, action, result."
    >
      <div className="incidents">
        {incidents.map((inc) => (
          <article key={inc.id} className="incident">
            <div className="incident-meta mono">
              <span className="resolved">resolved</span>
              <span>{inc.id}</span>
              <span>{inc.when}</span>
            </div>
            <h3>{inc.title}</h3>
            <dl>
              <dt className="mono">impact</dt><dd>{inc.impact}</dd>
              <dt className="mono">action</dt><dd>{inc.action}</dd>
              <dt className="mono">result</dt><dd className="result">{inc.result}</dd>
            </dl>
          </article>
        ))}
      </div>
    </Section>
  )
}

function Changelog() {
  return (
    <Section id="changelog" label="changelog" title="Releases so far" intro="My career, newest version first.">
      <ol className="changelog">
        {changelog.map((c) => (
          <li key={c.version}>
            <div className="ver mono">
              <span className="tag">{c.version}</span>
              <span className="when">{c.when}</span>
            </div>
            <div className="entry">
              <h3>{c.title}</h3>
              <ul>{c.notes.map((n) => <li key={n}>{n}</li>)}</ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}

function Projects() {
  return (
    <Section id="projects" label="side projects" title="Things I built on my own time">
      <div className="projects">
        {projects.map((p) => (
          <article key={p.name} className="project">
            <h3>{p.name}</h3>
            <p>{p.summary}</p>
            <p className="chips mono">{p.stack.join(' · ')}</p>
            {(p.code || p.demo) && (
              <p className="links">
                {p.code && <a href={p.code} target="_blank" rel="noreferrer">Code ↗</a>}
                {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Live ↗</a>}
              </p>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}

function Hire() {
  return (
    <Section
      id="hire"
      label="freelance"
      title="Hire me for a project"
      intro="One experienced engineer who designs it, builds it, ships it and hands it over cleanly. Here's what I take on."
    >
      <div className="endpoints">
        {services.map((s) => (
          <article key={s.path} className="endpoint">
            <p className="route mono"><span className="method">{s.method}</span>{s.path}</p>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </article>
        ))}
      </div>
      <h3 className="sub">How it works</h3>
      <ol className="steps">
        {steps.map((s) => <li key={s}>{s}</li>)}
      </ol>
    </Section>
  )
}

function Stack() {
  return (
    <Section id="stack" label="dependencies" title="What I work with">
      <dl className="stack">
        {Object.entries(stack).map(([k, v]) => (
          <div key={k}>
            <dt className="mono">{k}</dt>
            <dd>{v.join(', ')}</dd>
          </div>
        ))}
      </dl>
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
      <ul className="offcall">{offCall.map((o) => <li key={o}>{o}</li>)}</ul>
      {posts.length > 0 && (
        <>
          <h3 className="sub">Latest notes</h3>
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
    <Section
      id="contact"
      label="open a ticket"
      title="Let's talk"
      intro="Hiring for a senior backend role, or have a system that needs help? Send me a few lines. I usually reply within a day."
    >
      <div className="contact">
        {profile.email ? (
          <p className="email">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <button type="button" className="btn small" onClick={copy}>{copied ? 'Copied' : 'Copy'}</button>
          </p>
        ) : (
          <p className="email placeholder">[your email goes here]</p>
        )}
        <p className="elsewhere">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
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
      <Hire />
      <Stack />
      <OffCall />
      <Contact />
    </>
  )
}

export default Home
