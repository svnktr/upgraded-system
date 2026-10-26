// Every image in src/designs/ shows up in the design gallery automatically.
// Name files like "01-acme-coffee.svg": the number sets the order and the
// rest becomes the caption ("Acme coffee").
const files = import.meta.glob('../designs/*.{svg,png,jpg,jpeg,webp}', {
  query: '?url',
  import: 'default',
  eager: true,
})

export const designs = Object.entries(files)
  .map(([path, url]) => {
    const base = path.split('/').pop().replace(/\.[^.]+$/, '')
    const name = base.replace(/^\d+[-_ ]*/, '').replace(/[-_]+/g, ' ')
    return { key: base, url, name: name.charAt(0).toUpperCase() + name.slice(1) }
  })
  .sort((a, b) => a.key.localeCompare(b.key))
