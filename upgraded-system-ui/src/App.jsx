import { useEffect, useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import { NotesPage, PostPage } from './components/Notes'
import Footer from './components/Footer'
import { posts } from './lib/posts'

function readRoute() {
  const hash = window.location.hash.slice(1)
  if (hash === 'notes') return { view: 'notes' }
  if (hash.startsWith('note-')) {
    const post = posts.find((p) => p.slug === hash.slice(5))
    if (post) return { view: 'post', post }
  }
  return { view: 'home', anchor: hash }
}

function App() {
  const [route, setRoute] = useState(readRoute)

  useEffect(() => {
    const onHash = () => setRoute(readRoute())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    if (route.view === 'home' && route.anchor) {
      document.getElementById(route.anchor)?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
    document.title =
      route.view === 'post' ? `${route.post.title} · Srinath Venkatramanan` : 'Srinath Venkatramanan'
  }, [route])

  return (
    <>
      <Header />
      <main>
        {route.view === 'home' && <Home />}
        {route.view === 'notes' && <NotesPage />}
        {route.view === 'post' && <PostPage post={route.post} />}
      </main>
      <Footer />
    </>
  )
}

export default App
