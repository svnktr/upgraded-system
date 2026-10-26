// Everything personal on the site lives here. Edit this file to update content.
// Leave a value as '' to hide the thing that uses it.

export const profile = {
  name: 'Srinath Venkatramanan',
  firstName: 'Srinath',
  role: 'Java backend engineer',
  location: 'Mississauga, ON',
  firstDayInProduction: '2017-12-01',
  email: '', // TODO: public email address
  resumeUrl: '', // TODO: put resume.pdf in public/ and set to 'resume.pdf'
  linkedin: 'https://www.linkedin.com/in/svnktr/',
  github: 'https://github.com/svnktr',
}

// One entry per quarter is drawn from these periods on the uptime bar.
export const periods = [
  { from: '2017-12', to: '2019-03', label: 'Software Engineering Trainee, Chennai', kind: 'up' },
  { from: '2019-04', to: '2021-01', label: 'Associate Software Engineer, Chennai', kind: 'up' },
  { from: '2021-01', to: '2023-02', label: 'Software Engineer, Chennai', kind: 'up' },
  { from: '2023-03', to: '2025-01', label: 'On-site technical lead for Bell Canada, Mississauga', kind: 'up' },
  { from: '2025-02', to: 'now', label: 'Maintenance window: building and studying', kind: 'maint' },
]

export const incidents = [
  {
    id: 'INC-0412',
    icon: 'database',
    metric: '60% faster reports',
    title: 'Reports that kept business users waiting',
    when: '2021 to 2023',
    impact: 'Oracle reporting queries behind a Bell Canada application were slow enough that people planned their day around them.',
    action: 'Profiled the worst PL/SQL queries and rewrote them, working through execution plans one report at a time.',
    result: 'Reports ran more than 60% faster.',
  },
  {
    id: 'INC-0907',
    icon: 'siren',
    metric: 'Sev-1 on-site lead',
    title: 'Severity-one outages on customer-facing services',
    when: '2023 to 2025',
    impact: 'When a telecom service goes down, millions of subscribers notice. I was the on-site lead the client called.',
    action: 'Traced failures through Log4j output and the database, tuned the PL/SQL at fault, and wrote the root-cause analysis.',
    result: 'Less downtime on customer-facing services.',
  },
  {
    id: 'INC-1130',
    icon: 'git',
    metric: 'SVN to CI/CD',
    title: 'Releases that depended on SVN and manual steps',
    when: '2023 to 2025',
    impact: 'Every release relied on people remembering the right steps in the right order.',
    action: 'Led the move from SVN to GitLab and set up GitLab CI/CD pipelines with Docker.',
    result: 'Builds and deployments run from a pipeline instead of a checklist.',
  },
  {
    id: 'INC-1218',
    icon: 'shield',
    metric: 'CVEs patched',
    title: 'Known vulnerabilities and expiring certificates',
    when: '2023 to 2025',
    impact: 'Public CVEs in WebLogic and Java, and SSL certificates that could quietly expire.',
    action: 'Patched the affected WebLogic and Java versions and took ownership of the certificate lifecycle.',
    result: 'A hardened platform, with renewals handled before they became incidents.',
  },
]

export const changelog = [
  { version: 'v5.0-beta', when: '2025 to now', title: 'Maintenance window', note: 'Built Expensify and Score Deck. Deep dives into Kafka, concurrency and system design.' },
  { version: 'v4.0', when: '2023 to 2025', title: 'On-site tech lead, Bell Canada', note: 'Moved to Mississauga. Led releases, incidents and the move to CI/CD. AWS certified.' },
  { version: 'v3.0', when: '2021 to 2023', title: 'Software Engineer, Chennai', note: 'Mentored 5 developers. Owned production deployments.' },
  { version: 'v2.0', when: '2019 to 2021', title: 'Associate Software Engineer', note: 'Built features and upgraded WebLogic and Oracle.' },
  { version: 'v1.0', when: '2017 to 2019', title: 'Trainee', note: 'First production code in Java.' },
  { version: 'v0.1', when: '2013 to 2017', title: 'B.E. Computer Science', note: 'Sri Shakthi Institute of Engineering and Technology.' },
]

export const projects = [
  {
    name: 'Expensify',
    summary: 'Expense tracker built as microservices behind an API gateway.',
    stack: ['Spring Boot', 'Kafka', 'PostgreSQL', 'Spring Cloud Gateway', 'Docker', 'React'],
    code: '', // TODO: repo link
    demo: '',
  },
  {
    name: 'Score Deck',
    summary: 'A real-time score tracking and leaderboard system.', // TODO: what it keeps score for
    stack: ['Java', 'Spring Boot', 'React'],
    code: '',
    demo: '',
  },
  {
    name: 'This site',
    summary: 'React and Vite, shipped by GitHub Actions.',
    stack: ['React', 'Vite', 'GitHub Actions'],
    code: 'https://github.com/svnktr/upgraded-system',
    demo: '',
  },
]

export const services = [
  {
    method: 'POST',
    path: '/apis',
    icon: 'code',
    title: 'Backend APIs and microservices',
    body: 'Spring Boot services, built, tested and documented.',
  },
  {
    method: 'POST',
    path: '/tune',
    icon: 'gauge',
    title: 'Database performance',
    body: 'Slow Oracle or PostgreSQL queries, made fast.',
  },
  {
    method: 'POST',
    path: '/modernize',
    icon: 'refresh',
    title: 'Legacy modernization',
    body: 'Old Java apps moved to CI/CD, Docker and the cloud.',
  },
  {
    method: 'POST',
    path: '/on-call',
    icon: 'buoy',
    title: 'Production support and hardening',
    body: 'Incident fixes, root-cause reports and security patching.',
  },
]

export const steps = [
  { icon: 'mail', text: 'Email me the problem' },
  { icon: 'coffee', text: 'Free 30-minute call' },
  { icon: 'file', text: 'Fixed quote and timeline' },
  { icon: 'code', text: 'Built, shipped, handed over' },
]

export const stack = [
  { group: 'Language', icon: 'code', items: ['Java 8/11', 'SQL', 'PL/SQL', 'JavaScript'] },
  { group: 'Frameworks', icon: 'layers', items: ['Spring Boot', 'Spring Cloud', 'Spring Security', 'Hibernate/JPA'] },
  { group: 'Messaging', icon: 'stream', items: ['Kafka', 'JMS'] },
  { group: 'Data', icon: 'database', items: ['Oracle', 'PostgreSQL'] },
  { group: 'Ops', icon: 'cloud', items: ['AWS', 'Docker', 'GitLab CI/CD', 'WebLogic', 'JUnit'] },
]

export const quotes = [
  {
    text: 'Srinath is a seasoned Senior Developer and a dependable professional.',
    who: 'Simi Lachman',
    role: 'Senior Technical Architect, client',
  },
  {
    text: 'Technical expertise and logical thinking are his best assets.',
    who: 'Davakumar Anbazhagan',
    role: 'Principal Program Manager, Orion Innovation',
  },
]

// TODO: replace with your own. Each is one short line.
export const offCall = [
  '[Hobby one, and what you like about it]',
  '[Hobby two]',
  '[Something people are surprised to learn about you]',
]
