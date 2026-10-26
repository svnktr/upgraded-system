import { useState } from 'react'
import { quarters } from '../lib/uptime'

function Uptime() {
  const qs = quarters()
  const last = qs[qs.length - 1]
  const [active, setActive] = useState(last)
  const up = qs.filter((q) => q.period?.kind === 'up').length

  return (
    <div className="uptime">
      <div className="uptime-head mono">
        <span>{qs[0].label}</span>
        <span>{up} quarters shipping</span>
        <span>today</span>
      </div>
      <div className="bars" onMouseLeave={() => setActive(last)}>
        {qs.map((q) => (
          <button
            key={q.key}
            type="button"
            className={`bar ${q.period?.kind ?? 'none'} ${active.key === q.key ? 'on' : ''}`}
            aria-label={`${q.label}: ${q.period?.label ?? ''}`}
            onMouseEnter={() => setActive(q)}
            onFocus={() => setActive(q)}
            onClick={() => setActive(q)}
          />
        ))}
      </div>
      <p className="uptime-caption mono" aria-live="polite">
        <span className={`pip ${active.period?.kind}`} aria-hidden="true"></span>
        <strong>{active.label}</strong> · {active.period?.label}
      </p>
    </div>
  )
}

export default Uptime
