import { periods } from '../data/site'

function toIndex(ym) {
  const [y, m] = ym.split('-').map(Number)
  return y * 12 + (m - 1)
}

// Returns one entry per calendar quarter from the first period to today.
export function quarters(today = new Date()) {
  const nowIdx = today.getFullYear() * 12 + today.getMonth()
  const ranges = periods.map((p) => ({
    ...p,
    start: toIndex(p.from),
    end: p.to === 'now' ? nowIdx : toIndex(p.to),
  }))
  const first = ranges[0].start - (ranges[0].start % 3)
  const out = []
  for (let q = first; q <= nowIdx; q += 3) {
    // The latest period that covers any month of the quarter wins.
    let hit = null
    for (const r of ranges) if (r.start <= q + 2 && r.end >= q) hit = r
    const year = Math.floor(q / 12)
    out.push({ key: q, label: `Q${(q % 12) / 3 + 1} ${year}`, period: hit })
  }
  return out
}

export function daysSince(iso, today = new Date()) {
  return Math.floor((today - new Date(iso + 'T00:00:00')) / 86400000)
}
