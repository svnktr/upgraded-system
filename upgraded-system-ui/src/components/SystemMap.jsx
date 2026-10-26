// Hero illustration: requests flowing through a gateway, services and a
// message stream into a database. Pure SVG, animated with CSS.
function SystemMap() {
  const services = [70, 150, 230]
  return (
    <svg className="system-map" viewBox="0 0 520 300" role="img" aria-label="Diagram of requests flowing from clients through a gateway to services, a Kafka stream and a database">
      <g className="wires">
        {services.map((y) => <path key={`a${y}`} d={`M150 150 C 190 150, 190 ${y}, 230 ${y}`} />)}
        {services.map((y) => <path key={`b${y}`} d={`M322 ${y} C 346 ${y}, 346 150, 370 150`} />)}
        <path d="M40 90 C 80 90, 80 150, 110 150" />
        <path d="M40 150 L 110 150" />
        <path d="M40 210 C 80 210, 80 150, 110 150" />
        <path d="M420 150 L 470 150" />
      </g>
      <g className="flow">
        {services.map((y, i) => <path key={`fa${y}`} style={{ animationDelay: `${i * 0.6}s` }} d={`M150 150 C 190 150, 190 ${y}, 230 ${y}`} />)}
        {services.map((y, i) => <path key={`fb${y}`} style={{ animationDelay: `${0.9 + i * 0.6}s` }} d={`M322 ${y} C 346 ${y}, 346 150, 370 150`} />)}
        <path style={{ animationDelay: '1.8s' }} d="M420 150 L 470 150" />
      </g>
      {[90, 150, 210].map((y) => <circle key={y} className="client" cx="32" cy={y} r="8" />)}
      <rect className="node" x="110" y="128" width="40" height="44" rx="8" />
      <text className="tag" x="130" y="190" textAnchor="middle">gateway</text>
      {services.map((y, i) => (
        <g key={y}>
          <rect className="node svc" x="230" y={y - 18} width="92" height="36" rx="8" />
          <circle className="led" cx="246" cy={y} r="4" style={{ animationDelay: `${i * 0.4}s` }} />
          <text className="svc-label" x="256" y={y + 4}>{['orders', 'billing', 'accounts'][i]}</text>
        </g>
      ))}
      <rect className="node stream" x="370" y="128" width="50" height="44" rx="8" />
      <path className="stream-lines" d="M380 142h30M380 150h30M380 158h30" />
      <text className="tag" x="395" y="190" textAnchor="middle">kafka</text>
      <g className="db">
        <ellipse cx="490" cy="132" rx="22" ry="7" />
        <path d="M468 132v36c0 3.9 9.8 7 22 7s22-3.1 22-7v-36" />
        <path d="M468 150c0 3.9 9.8 7 22 7s22-3.1 22-7" />
      </g>
      <text className="tag" x="490" y="196" textAnchor="middle">oracle</text>
    </svg>
  )
}

export default SystemMap
