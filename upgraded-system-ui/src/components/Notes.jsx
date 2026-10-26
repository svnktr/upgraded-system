import { posts, formatDate } from '../lib/posts'

export function NoteList({ items }) {
  return (
    <ul className="notes">
      {items.map((p) => (
        <li key={p.slug}>
          <a href={`#note-${p.slug}`}>
            <span className="date mono">{formatDate(p.date)}</span>
            <span className="t">{p.title}</span>
            {p.summary && <span className="s">{p.summary}</span>}
          </a>
        </li>
      ))}
    </ul>
  )
}

export function NotesPage() {
  return (
    <section className="section page">
      <div className="wrap">
        <header className="section-head">
          <p className="label mono">notes</p>
          <h1>Notes</h1>
          <p className="intro">What I learn from building and running backend systems.</p>
        </header>
        <NoteList items={posts} />
      </div>
    </section>
  )
}

export function PostPage({ post }) {
  return (
    <article className="section page">
      <div className="wrap narrow">
        <p className="label mono"><a href="#notes">← notes</a> · {formatDate(post.date)}</p>
        <h1>{post.title}</h1>
        <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </article>
  )
}
