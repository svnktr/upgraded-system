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
    title: 'Reports that kept business users waiting',
    when: '2021 to 2023',
    impact: 'Oracle reporting queries behind a Bell Canada application were slow enough that people planned their day around them.',
    action: 'Profiled the worst PL/SQL queries and rewrote them, working through execution plans one report at a time.',
    result: 'Reports ran more than 60% faster.',
  },
  {
    id: 'INC-0907',
    title: 'Severity-one outages on customer-facing services',
    when: '2023 to 2025',
    impact: 'When a telecom service goes down, millions of subscribers notice. I was the on-site lead the client called.',
    action: 'Traced failures through Log4j output and the database, tuned the PL/SQL at fault, and wrote the root-cause analysis.',
    result: 'Less downtime on customer-facing services.',
  },
  {
    id: 'INC-1130',
    title: 'Releases that depended on SVN and manual steps',
    when: '2023 to 2025',
    impact: 'Every release relied on people remembering the right steps in the right order.',
    action: 'Led the move from SVN to GitLab and set up GitLab CI/CD pipelines with Docker.',
    result: 'Builds and deployments run from a pipeline instead of a checklist.',
  },
  {
    id: 'INC-1218',
    title: 'Known vulnerabilities and expiring certificates',
    when: '2023 to 2025',
    impact: 'Public CVEs in WebLogic and Java, and SSL certificates that could quietly expire.',
    action: 'Patched the affected WebLogic and Java versions and took ownership of the certificate lifecycle.',
    result: 'A hardened platform, with renewals handled before they became incidents.',
  },
]

export const changelog = [
  {
    version: 'v5.0-beta',
    when: '2025 to now',
    title: 'Maintenance window',
    notes: [
      'Built Expensify, an end-to-end microservices platform, and Score Deck.',
      'Went deep on Java concurrency, Kafka internals, Spring Security (OAuth2/JWT) and system design.',
    ],
  },
  {
    version: 'v4.0',
    when: '2023 to 2025',
    title: 'On-site technical lead, Bell Canada (Orion Innovation)',
    notes: [
      'Moved to Mississauga to work alongside the client team.',
      'Coordinated offshore and client teams across the full release cycle, on systems integrated with Kafka and JMS.',
      'Replaced a legacy JSF front end with a modern JavaScript framework.',
      'Earned AWS Certified Cloud Practitioner (Sep 2024).',
    ],
  },
  {
    version: 'v3.0',
    when: '2021 to 2023',
    title: 'Software Engineer, Chennai',
    notes: [
      'Mentored 5 junior developers on the architecture and the Java/Spring stack.',
      'Turned client requirement documents into designs and estimates.',
      'Owned production deployments, schema changes and data fixes.',
    ],
  },
  {
    version: 'v2.0',
    when: '2019 to 2021',
    title: 'Associate Software Engineer, Chennai',
    notes: [
      'Designed and built features for a Java/Spring enterprise application.',
      'Upgraded WebLogic and Oracle Database across environments.',
    ],
  },
  {
    version: 'v1.0',
    when: '2017 to 2019',
    title: 'Software Engineering Trainee, Chennai',
    notes: ['First production modules in Java, and first calls with client stakeholders.'],
  },
  {
    version: 'v0.1',
    when: '2013 to 2017',
    title: 'B.E. Computer Science',
    notes: ['Sri Shakthi Institute of Engineering and Technology.'],
  },
]

export const projects = [
  {
    name: 'Expensify',
    summary: 'An expense tracker built as a set of microservices behind an API gateway, so each part can be deployed and scaled on its own.',
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
    summary: 'Built from scratch with React and Vite, deployed by GitHub Actions. The notes section is plain Markdown files.',
    stack: ['React', 'Vite', 'GitHub Actions'],
    code: 'https://github.com/svnktr/upgraded-system',
    demo: '',
  },
]

export const services = [
  {
    method: 'POST',
    path: '/apis',
    title: 'Backend APIs and microservices',
    body: 'Spring Boot REST APIs or services, designed, built, tested and documented, ready to deploy.',
  },
  {
    method: 'POST',
    path: '/tune',
    title: 'Database performance',
    body: 'Slow Oracle or PostgreSQL queries and reports found and rewritten, with before and after timings.',
  },
  {
    method: 'POST',
    path: '/modernize',
    title: 'Legacy modernization',
    body: 'Older Java apps upgraded, moved to Git and CI/CD with Docker, and made ready for the cloud.',
  },
  {
    method: 'POST',
    path: '/on-call',
    title: 'Production support and hardening',
    body: 'Incident diagnosis, root-cause write-ups, vulnerability fixes and certificate housekeeping.',
  },
]

export const steps = [
  'You email me a few lines about the problem.',
  'We talk for 30 minutes, free.',
  'I send a fixed price or an hourly estimate, with a timeline.',
  'I build it, send weekly updates, and hand it over with docs.',
]

export const stack = {
  'Language': ['Java 8/11', 'SQL', 'PL/SQL', 'JavaScript'],
  'Frameworks': ['Spring Boot', 'Spring Cloud', 'Spring Security', 'Hibernate/JPA'],
  'Messaging': ['Kafka', 'JMS'],
  'Data': ['Oracle', 'PostgreSQL'],
  'Ops': ['AWS', 'Docker', 'GitLab CI/CD', 'WebLogic', 'JUnit'],
}

export const quotes = [
  {
    text: 'His exceptional performance on critical applications has consistently demonstrated his ability to diagnose and resolve complex, service-impacting production issues under tight deadlines.',
    who: 'Simi Lachman',
    role: 'Senior Technical Architect, client',
  },
  {
    text: 'Technical expertise and logical thinking are his best assets. He has mentored and groomed his juniors with the same values and expertise he holds.',
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
